import { fabric } from 'fabric'
import { Styles, Font, Palette, Sensors } from './data'
import { AlarmPanel } from './alarmpanel'
import { UpperFloor } from './upperfloor'
import { LowerFloor } from './lowerfloor'
import { TempChart } from './tempchart'
import { LogViewer } from './logviewer'

export class Dashboard
{
	
    canvas: fabric.Canvas;
    
    alarmPanel: AlarmPanel;
	upperFloor: UpperFloor;
	lowerFloor: LowerFloor;
	tempChart: TempChart;
	logViewer: LogViewer;

	clock: fabric.Text;
	date: fabric.Text;
	
	constructor(c: fabric.Canvas)
	{
        this.canvas = c;
        
        this.alarmPanel = new AlarmPanel();
		this.upperFloor = new UpperFloor();
		this.lowerFloor = new LowerFloor();
		this.tempChart = new TempChart();
		this.logViewer = new LogViewer();

		this.logViewer.Update.on(() => { this.canvas.requestRenderAll(); });
	}
	
	render():void
	{
		this.canvas.clear();
		this.canvas.setBackgroundColor(Palette.BgColor, () => {});
		//this.drawLcars();
		//this.drawGrid(50, {strokeWidth: 1, stroke: "rgba(255,255,255,0.03)"} );

		//let title = new fabric.Text("SERENITY", { left: 130, top: 25, fontFamily: Font.Pirulen, fontSize: 32, fill: Palette.White, charSpacing: 200 });
		//let underline = new fabric.Path("M 0 35 L 100 35 L 130 65 L 1280 65", Styles.GlowingLine);

		//this.clock = new fabric.Text("00:00", { left: 1150, top: 15, fontFamily: Font.LibelSuit, fontSize: 18, fill: Palette.White });
		//this.date = new fabric.Text("1st Jan 1900", { left: 1150, top: 40, fontFamily: Font.LibelSuit, fontSize: 18, fill: Palette.White })

		let upperFloor = this.upperFloor.getUpperFloorGroup();
        //let lowerFloor = this.lowerFloor.getLowerFloorGroup();
		//let tempChart = this.tempChart.getTempChart();
        //let securityBox = this.alarmPanel.getSecurityBox();

		//let logViewer = this.logViewer.getLogViewer();
		
		this.canvas.add(upperFloor);

		this.canvas.renderAll();
	}

	drawLcars(): void
	{
		let leftWidth = 230;
		let topItemHeight = 40;

		let firstElementLength = 510;
		let firstElementHeight = 190;

		let innerRad = 50;
		let outerRad = 70;

		let margin = 30;
		let spacing = 20;

		let path = new fabric.Path(`M0,${firstElementHeight} L0,${outerRad} S0,0 ${outerRad},0 L${firstElementLength},0 L${firstElementLength},${topItemHeight} L${leftWidth+innerRad},${topItemHeight} S${leftWidth},${topItemHeight} ${leftWidth},${topItemHeight+innerRad} L${leftWidth},${firstElementHeight}`, { fill: Palette.LcarsPurple });
		path.top = margin;
		path.left = margin;

		let rect = new fabric.Rect({
			left: margin + firstElementLength + spacing + 210,
			top: margin,
			fill: Palette.LcarsPink,
			width: 1280 - (margin * 2) - firstElementLength - (spacing * 2) - 210,
			height: topItemHeight
		  });

		let rect2 = new fabric.Rect({
			left: margin,
			top: margin + spacing + firstElementHeight,
			fill: Palette.LcarsOrange,
			width: leftWidth,
			height: 50
		});

		let title = new fabric.Text("SERENITY", { 
			left: margin + firstElementLength + spacing, 
			top: 23, 
			fontFamily: Font.LCARS, 
			fontSize: 52, 
			fill: Palette.White, 
			charSpacing: 200
		});

		this.canvas.add(path, rect, rect2, title);
	}

	setClock(): void
	{
		let today = new Date();

		this.clock.text = today.toLocaleTimeString();
		this.date.text = today.toLocaleDateString("en-GB", { year: 'numeric', month: 'long', day: 'numeric' });
	}
	
	drawGrid(spacing: number, style: fabric.ILineOptions):void
	{
		for (var x = 0; x < this.canvas.width; x += spacing)
		{
			var line = new fabric.Line([x, 0, x, this.canvas.height], style);
			this.canvas.add(line);
		}
		for (var y = 0; y < this.canvas.height; y += spacing)
		{
			var line = new fabric.Line([0, y, this.canvas.width, y], style);
			this.canvas.add(line);
		}
	}

	refreshSensors(data: any): void
	{
		this.upperFloor.refreshSensors(data);
		this.lowerFloor.refreshSensors(data);

		this.canvas.renderAll();
	}
}