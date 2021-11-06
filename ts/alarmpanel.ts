import { fabric } from 'fabric'
import { Font, Palette, Styles } from './data'
import * as helpers from './helpers'

export class AlarmPanel {

	armedHomeCircle: fabric.Circle;
	armedAwayCircle: fabric.Circle;
	disarmedCircle: fabric.Circle;

	getSecurityBox():fabric.Group
	{
		let box = helpers.getTitleBox("SECURITY", 290, 180);
		
		let c1 = new fabric.Circle(Styles.GlowingLine); c1.set({left: 20, top: 50, radius: 12});
		let c2 = new fabric.Circle(Styles.GlowingLine); c2.set({left: 20, top: 90, radius: 12});
		let c3 = new fabric.Circle(Styles.GlowingLine); c3.set({left: 20, top: 130, radius: 12});
		
		this.armedHomeCircle = new fabric.Circle({ fill: Palette.AlarmArmedAway, shadow: new fabric.Shadow({ color: Palette.AlarmArmedAway, blur: 6 }), visible: false, left: 27, top: 57, radius: 6 });
		this.armedAwayCircle = new fabric.Circle({ fill: Palette.AlarmArmedHome, shadow: new fabric.Shadow({ color: Palette.AlarmArmedHome, blur: 6 }), visible: false, left: 27, top: 97, radius: 6 });
		this.disarmedCircle = new fabric.Circle({ fill: Palette.AlarmDisarmed, shadow: new fabric.Shadow({ color: Palette.AlarmDisarmed, blur: 6 }), visible: false, left: 27, top: 137, radius: 6 });
		
		let lines = new fabric.Path("M 1 62 L 20 62 M 1 104 L 20 104 M 1 144 L 20 144", Styles.GlowingLine)
		
		let armedText = new fabric.Text("ARMED (HOME)", { fontFamily: Font.LibelSuit, fontSize: 20, fill: Palette.White, top: 50, left: 60 });
		let armedAwayText = new fabric.Text("ARMED (AWAY)", { fontFamily: Font.LibelSuit, fontSize: 20, fill: Palette.White, top: 92, left: 60 });
		let disarmedText = new fabric.Text("DISARMED", { fontFamily: Font.LibelSuit, fontSize: 20, fill: Palette.White, top: 134, left: 60 });

		return new fabric.Group([box, c1, c2, c3, lines, armedText, armedAwayText, disarmedText, this.armedHomeCircle, this.armedAwayCircle, this.disarmedCircle], { top: 600, left: 40 });
	}

	setState(state:string)
	{
		this.armedHomeCircle.set({visible: state == "armed_home"});
		this.armedAwayCircle.set({visible: state == "armed_away"});
		this.disarmedCircle.set({visible: state == "disarmed"});
	}
}