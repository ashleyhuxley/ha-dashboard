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

export function cornerBoxStr(width: number, height: number, inset: number):string
{
	return "M 0 0 " + 
	"L " + (width - inset).toString() + " 0 " + 
	"L " + width.toString() + " " + inset.toString() + " " + 
	"L " + width.toString() + " " + height.toString() + " " + 
	"L " + inset.toString() + " " + height.toString() + " " +
	"L " + "0" + " " + (height - inset).toString() + " " +
	"L 0 0";
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