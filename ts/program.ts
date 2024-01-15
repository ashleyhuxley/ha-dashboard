import { fabric } from 'fabric'
import { Palette } from './data'
import { Dashboard} from './dashboard'
import { ApiClient } from './client';

export class Program
{

    canvas: fabric.Canvas;
    dashboard: Dashboard;
    client: ApiClient;

    constructor()
    {   
        this.canvas = new fabric.Canvas("mainCanvas", { backgroundColor: Palette.BgColor, selection: false });
        this.dashboard = new Dashboard(this.canvas);
        this.client = new ApiClient();
    }

    increment(id: string) {
        var current = Number((document.getElementById(id) as HTMLInputElement).value);
        current += 2;
        if (current > 360)
        {
            current = 0;
        }
        (document.getElementById(id) as HTMLInputElement).value = String(current);
    }
    
    run(): void
    {
        document.getElementById("rot-x").addEventListener("change", (event) => { this.dashboard.render(); });
        document.getElementById("rot-y").addEventListener("change", (event) => { this.dashboard.render(); });
        document.getElementById("rot-z").addEventListener("change", (event) => { this.dashboard.render(); });
        document.getElementById("vp-x").addEventListener("change", (event) => { this.dashboard.render(); });
        document.getElementById("vp-y").addEventListener("change", (event) => { this.dashboard.render(); });
        document.getElementById("vp-z").addEventListener("change", (event) => { this.dashboard.render(); });

        setInterval(() => {
            this.increment("rot-y");

            this.dashboard.render();
          }, 50);

        this.dashboard.render();

        var root = this;
        setInterval(function() { root.refreshData(); }, 2000);
        setInterval(function() { root.dashboard.setClock(); }, 1000);
        setInterval(function() { root.refreshLogs(); }, 5000)
    }

    refreshData(): void
    {
        //this.client.getTempHistory(data.temperatureSensors, this.renderTemperatureChart);
        //this.client.getSensorStates((data) =>  { this.dashboard.refreshSensors(data) } );
        //this.client.getAlarmState((data) => { this.dashboard.alarmPanel.setState(data.state) } );      
    }

    refreshLogs(): void
    {
        let date = new Date();
        date.setHours(date.getHours() - 1);

        //this.client.getLogsSince(date, (data) => { this.dashboard.logViewer.updateLogs(data); });
    }
}