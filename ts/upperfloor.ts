import { fabric } from 'fabric'
import { UpperRooms, Sensors, Styles, SensorArea, sensorShadow, noShadow } from './data'
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
		let upperFloorOutline = new fabric.Path(helpers.cornerBoxStr(560, 368, 20), Styles.GlowingLine);
	
		let elements = [];
		for (var i = 0; i < UpperRooms.length; i++)
		{
			elements.push(helpers.getRoom(UpperRooms[i]));
		}

		for (var j = 0; j < Sensors.length; j++)
		{
			if (Sensors[j].area == SensorArea.UpperFloor)
			{
				let sensorPath = helpers.getSensor(Sensors[j]);

				elements.push(sensorPath);
				this.sensors[Sensors[j].id] = sensorPath;
			}
		}

		elements.push(upperFloorOutline);

		return new fabric.Group(elements, { left: 640, top: 150, selectable: false });
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
					sensor.set({ fill: "yellow", shadow: sensorShadow });
				}
				else
				{
					sensor.set({ fill: "white", shadow: noShadow });
				}
			}
		}
	}
}