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
	}
	
	render():void
	{
		this.drawGrid(50, {strokeWidth: 1, stroke: "rgba(255,255,255,0.03)"} );

		let title = new fabric.Text("SERENITY", { left: 130, top: 25, fontFamily: Font.Pirulen, fontSize: 32, fill: Palette.White, charSpacing: 200 });
		let underline = new fabric.Path("M 0 35 L 100 35 L 130 65 L 1280 65", Styles.GlowingLine);

		this.clock = new fabric.Text("00:00", { left: 1150, top: 15, fontFamily: Font.LibelSuit, fontSize: 18, fill: Palette.White });
		this.date = new fabric.Text("1st Jan 1900", { left: 1150, top: 40, fontFamily: Font.LibelSuit, fontSize: 18, fill: Palette.White })

		let upperFloor = this.upperFloor.getUpperFloorGroup();
        let lowerFloor = this.lowerFloor.getLowerFloorGroup();
		let tempChart = this.tempChart.getTempChart();
        let securityBox = this.alarmPanel.getSecurityBox();
		let logViewer = this.logViewer.getLogViewer();
		
		this.canvas.add(title, underline, this.clock, this.date, upperFloor, lowerFloor, securityBox, tempChart, logViewer);

		this.canvas.renderAll();
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