import { fabric } from 'fabric'
import { Styles, Palette, Font } from './data'

export function getTitleBox(text: string, width: number, height: number):fabric.Group
{
	let tw = width - 60;

	let title = new fabric.Text(text, { fontFamily: Font.Pirulen, fontSize: 15, fill: Palette.White, top: 6 });
	title.left = (tw / 2) - (title.width / 2);
	
	let titleBg = new fabric.Path("M 0 15 L 15 0 L " + (tw - 15).toString() + " 0 L " + tw.toString() + " 15 L " + (tw - 15).toString() + " 30 L 15 30 L 0 15");
	titleBg.set({fill: Palette.Turquoise});
	
	let titleBg2 = new fabric.Rect({ top: 3, left: 15, width: tw - 35, height: 23, fill: Palette.Black});
	
	let titleGroup = new fabric.Group([titleBg, titleBg2, title], { left: 30, top: -17 });
	
	let path = new fabric.Path("M 0 0 L 20 0 L 40 20 L " + (width - 40).toString() + " 20 L " + (width - 20).toString() + " 0 L " + width.toString() + " 0 L " + width.toString() + " " + height.toString() + " L 0 " + height.toString() + " L 0 0");
	path.set(Styles.GlowingLine);

	return new fabric.Group([titleGroup, path]);
}

export function getRoom(roomData):fabric.Group
{
	let text = new fabric.Text(roomData.title, Styles.RoomTitleStyle);

	let room = new fabric.Path(roomData.path);
	room.set(Styles.RoomStyle);
	
	return new fabric.Group([room, text], { top: roomData.top, left: roomData.left });
}

export function getSensor(sensorData):fabric.Path
{
	return new fabric.Path(sensorData.icon, { top: sensorData.top, left: sensorData.left, fill: Palette.White } );
}

export function createFabricPath(coordinates: Point[]): string {
	if (coordinates.length === 0) {
		return '';
	}

	// Start the path at the first coordinate
	let pathString = `M${coordinates[0].x} ${coordinates[0].y}`;

	// Iterate through the remaining coordinates and add line segments
	for (let i = 1; i < coordinates.length; i++) {
		pathString += ` L${coordinates[i].x} ${coordinates[i].y}`;
	}

	// Close the path
	pathString += ` L${coordinates[0].x} ${coordinates[0].y}`

	return pathString;
}

export function rotateVector(vector: Vector3D, angles: { x: number; y: number; z: number }): Vector3D {
  // Rotate around X-axis
  const rotateX = (v: Vector3D, angle: number) => {
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const y = v.y * cosA - v.z * sinA;
    const z = v.y * sinA + v.z * cosA;
    return { ...v, y, z };
  };

  // Rotate around Y-axis
  const rotateY = (v: Vector3D, angle: number) => {
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const x = v.x * cosA + v.z * sinA;
    const z = -v.x * sinA + v.z * cosA;
    return { ...v, x, z };
  };

  // Rotate around Z-axis
  const rotateZ = (v: Vector3D, angle: number) => {
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const x = v.x * cosA - v.y * sinA;
    const y = v.x * sinA + v.y * cosA;
    return { ...v, x, y };
  };

  let rotatedVector = { ...vector };

  if (angles.x) {
    rotatedVector = rotateX(rotatedVector, angles.x);
  }

  if (angles.y) {
    rotatedVector = rotateY(rotatedVector, angles.y);
  }

  if (angles.z) {
    rotatedVector = rotateZ(rotatedVector, angles.z);
  }

  return rotatedVector;
}

function applyPerspective2(p: Vector3D): fabric.Point {
	console.log(`x: ${p.x} , y: ${p.y}`)

	const xr = Number((document.getElementById("vp-x") as HTMLInputElement).value);
	const yr = Number((document.getElementById("vp-y") as HTMLInputElement).value);
	const zr = Number((document.getElementById("vp-z") as HTMLInputElement).value);
	const radiansToDegrees = 180 / Math.PI;

	const opp = xr - p.x;
	const angle = Math.atan(opp / yr) * radiansToDegrees;

	console.log(`opp: ${opp} , angle: ${angle}, tan: `)

	return new fabric.Point(
		xr - Math.tan((angle * Math.PI) / 180) * (yr + p.y),
		p.y,
	);
}

function project3DTo2D(vector: Vector3D): fabric.Point {
	const rotatedVector = rotateVector(vector, { x: 0, y: 0, z: 0 });
	//return new fabric.Point(rotatedVector.x, rotatedVector.y);
	return applyPerspective2(rotatedVector);
}


const perspectiveFactor = 0.9; // Adjust the perspective factor as needed

function applyPerspective(vector: Vector3D): fabric.Point {
	const xr = (document.getElementById("vp-x") as HTMLInputElement).value;
	const yr = (document.getElementById("vp-y") as HTMLInputElement).value;
	const zr = (document.getElementById("vp-z") as HTMLInputElement).value;

	const vanishingPoint: Vector3D = { x: Number(xr), y: Number(yr), z: 0 };

	const deltaX = vector.x - vanishingPoint.x;
	const deltaY = vector.y - vanishingPoint.y;
	const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2 + vector.z ** 2);
  
	const perspectiveX = vanishingPoint.x + (deltaX / distance) * perspectiveFactor * vector.z;
	const perspectiveY = vanishingPoint.y + (deltaY / distance) * perspectiveFactor * vector.z;
  
	return new fabric.Point(perspectiveX, perspectiveY);
  }

export function renderModel(model: Model, rotationAngles: { x: number; y: number; z: number }): fabric.Group {
  
	let elements = [];

	const vectors = model.vectors.map((vector) => project3DTo2D(rotateVector(vector, rotationAngles)));
  
	model.edges.forEach((e) => {
	  const startPoint = vectors[e.startIx];
	  const endPoint = vectors[e.endIx];
  
	  const line = new fabric.Line(
		[startPoint.x, startPoint.y, endPoint.x, endPoint.y],
		{
		  stroke: e.stroke === undefined ? Palette.LcarsYellow : e.stroke,
		  strokeWidth: e.weight === undefined ? 1 : e.weight,
		}
	  );
  
	  elements.push(line);
	});

	model.faces.forEach((f) => {
		let pathStr = createFabricPath(f.points.map(p => ({ x: vectors[p].x, y: vectors[p].y })));
		let path = new fabric.Path(pathStr, {
			fill: f.fill === undefined ? "#FFFFFF" : f.fill,
			opacity: f.opacity === undefined ? 0.3 : f.opacity
		})

		console.log(pathStr);

		elements.push(path);
	  })

	return new fabric.Group(elements, { left: 0, top: 150, width: 1280, selectable: false });
  }