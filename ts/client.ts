import * as $ from 'jquery'
import * as data from './data'

export class ApiClient {
    getTempHistory(sensors: string[], callback: (data: any) => void): void
    {
        $.ajax({
            url: data.API_BASE + "/history/period?filter_entity_id=" + sensors.join(',') + "&minimal_response",
            headers: { Authorization: "Bearer " + data.TOKEN, "Content-Type": "application/json" }
        }).done(callback);
    }

    getSensorState(id: string, callback: (data: any) => void): void
    {
        $.ajax({
            url: data.API_BASE + "/state/" + id,
            headers: { Authorization: "Bearer " + data.TOKEN, "Content-Type": "application/json" }
        }).done(callback);
    }

    getSensorStates(callback: (data: any) => void): void
    {
        $.ajax({
            url: data.API_BASE + "/states",
            headers: { Authorization: "Bearer " + data.TOKEN, "Content-Type": "application/json" }
        }).done(callback);
    }

    getAlarmState(callback: (data: any) => void): void
    {
        $.ajax({
            url: data.API_BASE + "/states/" + data.ALARM_ENTITY_ID,
            headers: { Authorization: "Bearer " + data.TOKEN, "Content-Type": "application/json" }
        }).done(callback);
    }

    getLogsSince(date: Date, callback: (data: any) => void): void
    {
        console.log("Logs from: " + date.toISOString());

        $.ajax({
            url: data.API_BASE + "/logbook/" + date.toISOString(),
            headers: { Authorization: "Bearer " + data.TOKEN, "Content-Type": "application/json" }
        }).done(callback);
    }
}