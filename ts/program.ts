import { fabric } from 'fabric'
import { Palette } from './data'
import { Dashboard} from './dashboard'
import { ApiClient } from './client';

export class Program
{

    canvas: fabric.Canvas;
    dashboard: Dashboard;
    client: ApiClient;

    lastLogDate: Date;

    constructor()
    {
        this.lastLogDate = new Date();
        
        this.canvas = new fabric.Canvas("mainCanvas", { backgroundColor: Palette.BgColor, selection: false });
        this.dashboard = new Dashboard(this.canvas);
        this.client = new ApiClient();
    }
    
    run(): void
    {
        this.dashboard.render();

        var root = this;
        setInterval(function() { root.refreshData(); }, 2000);
        setInterval(function() { root.dashboard.setClock(); }, 1000);
    }

    refreshData(): void
    {
        //this.client.getTempHistory(data.temperatureSensors, this.renderTemperatureChart);
        this.client.getSensorStates((data) =>  { this.dashboard.refreshSensors(data) } );
        this.client.getAlarmState((data) => { this.dashboard.alarmPanel.setState(data.state) } );
        this.client.getLogsSince(this.lastLogDate, (data) => { this.dashboard.logViewer.updateLogs(data) });

        this.lastLogDate = new Date();
    }
}