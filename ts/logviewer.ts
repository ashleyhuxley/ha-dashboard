import { fabric } from 'fabric'
import { Font, Palette } from './data';
import * as helpers from './helpers'
import { LiteEvent } from './helpers/events'

export class LogViewer
{
    entry1: fabric.Text;
    entry2: fabric.Text;
    entry3: fabric.Text;
    entry4: fabric.Text;
    entry5: fabric.Text;

    private readonly onUpdate = new LiteEvent<void>();
    public get Update() { return this.onUpdate.expose(); }

    getLogViewer(): fabric.Group
    {
		let box = helpers.getTitleBox("LOG VIEWER", 290, 180);

        this.entry1 = new fabric.Text("Log Entry 1", { left: 5, top: 15, fontFamily: Font.LibelSuit, fontSize: 13, fill: Palette.White, charSpacing: 0 });
        this.entry2 = new fabric.Text("Log Entry 2", { left: 5, top: 35, fontFamily: Font.LibelSuit, fontSize: 13, fill: Palette.White, charSpacing: 0 });
        this.entry3 = new fabric.Text("Log Entry 3", { left: 5, top: 55, fontFamily: Font.LibelSuit, fontSize: 13, fill: Palette.White, charSpacing: 0 });
        this.entry4 = new fabric.Text("Log Entry 4", { left: 5, top: 75, fontFamily: Font.LibelSuit, fontSize: 13, fill: Palette.White, charSpacing: 0 });
        this.entry5 = new fabric.Text("Log Entry 5", { left: 5, top: 95, fontFamily: Font.LibelSuit, fontSize: 13, fill: Palette.White, charSpacing: 0 });
		
		return new fabric.Group([box, this.entry1, this.entry2, this.entry3, this.entry4, this.entry5], { top: 900, left: 40, objectCaching: false });
    }

    updateLogs(data: any): void
    {
        data.sort((a, b) => { let aw = Date.parse(a.when); let bw = Date.parse(b.when); return bw - aw; });

        this.entry1.text = (data.length > 0) ? this.getText(data[0]) : "";      
        this.entry2.text = (data.length > 1) ? this.getText(data[1]) : "";
        this.entry3.text = (data.length > 2) ? this.getText(data[2]) : "";
        this.entry4.text = (data.length > 3) ? this.getText(data[3]) : "";
        this.entry5.text = (data.length > 4) ? this.getText(data[4]) : "";

        this.onUpdate.trigger();
    }

    getText(data: any): string
    {
        let date = new Date(data.when);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString() + " " + data.name + " changed to " + data.state
    }
}