import { fabric } from 'fabric'
import * as helpers from './helpers'

export class LogViewer
{
    getLogViewer(): fabric.Group
    {
		let box = helpers.getTitleBox("LOG VIEWER", 290, 180);
		
		return new fabric.Group([box], { top: 900, left: 40 });
    }

    updateLogs(data: any): void
    {
        for (var i = 0; i < data.length; i++)
        {
            let msg = data[i].name + " changed to " + data[i].state;
            console.log(msg);
        }
    }
}