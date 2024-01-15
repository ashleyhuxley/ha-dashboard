import { fabric } from 'fabric'
import * as data from './data'
import * as helpers from './helpers'

export class UpperFloor
{

	sensors: { [id: string]: fabric.Path };

	constructor()
	{
		this.sensors = {};
	}

	getUpperFloorGroup():fabric.Group
	{
		const xr = (document.getElementById("rot-x") as HTMLInputElement).value;
		const yr = (document.getElementById("rot-y") as HTMLInputElement).value;
		const zr = (document.getElementById("rot-z") as HTMLInputElement).value;

		const dtr = Math.PI / 180;

		return helpers.renderModel(data.cube, { x: Number(xr) * dtr, y: Number(yr) * dtr, z: Number(zr) * dtr })
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
					sensor.set({ fill: "yellow", shadow: data.sensorShadow });
				}
				else
				{
					sensor.set({ fill: "white", shadow: data.noShadow });
				}
			}
		}
	}
}