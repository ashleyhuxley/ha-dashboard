import { fabric } from 'fabric'
import { LowerRooms, Sensors, Styles, SensorArea, Palette, sensorShadow, noShadow } from './data'
import * as helpers from './helpers'

export class LowerFloor
{
	sensors: { [id: string]: fabric.Path };

	constructor()
	{
		this.sensors = {};
	}

	getLowerFloorGroup():fabric.Group
	{
		let lowerFloorOutline = new fabric.Path("M 0 0 L 230 0 M 310 0 L 540 0 L 560 20 L 560 368 L 540 368 M 330 368 L 100 368 M 20 368 L 0 368 L 0 0 M 560 368 L 560 504 L 495 569 L 375 569 L 310 504 L 310 368 M 220 0 L 220 -40 L 230 -40 M 320 0 L 320 -40 L 310 -40", Styles.GlowingLine);
		
		let doorLines = new fabric.Path("M 230 1 L 310 1 M 230 -39 L 310 -39 M 540 369 L 330 369 M 100 369 L 20 369");
		doorLines.set(Styles.DoorStyle);
		
		let elements = [];
		for (var i = 0; i < LowerRooms.length; i++)
		{
			elements.push(helpers.getRoom(LowerRooms[i]));
		}

		for (var j = 0; j < Sensors.length; j++)
		{
			if (Sensors[j].area == SensorArea.LowerFloor)
			{
				let sensorPath = helpers.getSensor(Sensors[j]);

				elements.push(sensorPath);
				this.sensors[Sensors[j].id] = sensorPath;
			}
		}
		
		elements.push(lowerFloorOutline);
		elements.push(doorLines);
		
		return new fabric.Group(elements, { left: 40, top: 110, selectable: false });
	}

	refreshSensors(data: any): void
	{
		for(var i = 0; i < data.length; i++)
		{
			let sensor = this.sensors[data[i].entity_id];
			if (sensor != null)
			{
				if (data[i].state == "on")
				{
					sensor.set({ fill: Palette.Yellow, shadow: sensorShadow });
				}
				else
				{
					sensor.set({ fill: Palette.White, shadow: noShadow });
				}
			}
		}
	}
}