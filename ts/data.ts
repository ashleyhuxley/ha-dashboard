import { fabric } from 'fabric'

export enum Palette
{
	None = "rgba(0,0,0,0)",
	LightGreen = "#54c5d5",
	Blue = "#0096d1",
	Turquoise = "#38d4e1",
	White = "#FFFFFF",
	Black = "#000000",
	BgColor = "#192028",
	AlarmArmedHome = "#FF3300",
	AlarmArmedAway = "#FF0000",
	AlarmDisarmed = "#00FF00",
	Yellow = "yellow"
}

export enum Font
{
	LibelSuit = "Libel Suit Rg",
	Pirulen = "Pirulen Rg"
}

export enum SensorArea
{
	UpperFloor,
	LowerFloor,
	Misc
}

export var Icons = 
{
	MotionSensor: "M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",
	LightBulb: "M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",
	CeilingLamp: "M8,9H11V4H13V9H16L20,17H4L8,9M14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18H14Z",
	Lamp: "M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z",
	FloorLamp: "M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z",
	Fan: "M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",
	Poop: "M11.36,2C11.15,2 10.87,2.12 10.57,2.32C10,2.7 8.85,3.9 8.4,5.1C8.06,6 8.05,6.82 8.19,7.43C7.63,7.53 7.22,7.71 7.06,7.78C6.55,8 5.47,8.96 5.37,10.45C5.34,10.97 5.41,11.5 5.57,12C4.91,12.19 4.53,12.43 4.5,12.44C4.18,12.56 3.65,12.93 3.5,13.13C3.15,13.53 2.92,14 2.79,14.5C2.5,15.59 2.6,16.83 3.13,17.83C3.42,18.39 3.82,19 4.26,19.43C5.7,20.91 8.18,21.47 10.14,21.79C12.53,22.19 15.03,22.05 17.26,21.13C20.61,19.74 21.5,17.5 21.64,16.89C21.93,15.5 21.57,14.19 21.42,13.87C21.2,13.41 20.84,12.94 20.25,12.64C19.85,12.39 19.5,12.26 19.24,12.2C19.5,11.25 19.13,10.5 18.62,9.94C17.85,9.12 17.06,9 17.06,9V9C17.32,8.5 17.42,7.9 17.28,7.32C17.12,6.61 16.73,6.16 16.22,5.86C15.7,5.55 15.06,5.4 14.4,5.28C14.08,5.22 12.75,5.03 12.2,4.27C11.75,3.65 11.74,2.53 11.62,2.2C11.57,2.07 11.5,2 11.36,2M16,9.61C16.07,9.61 16.13,9.62 16.19,9.62C17.62,9.78 18.64,11.16 18.47,12.69C18.3,14.22 17,15.34 15.57,15.18V15.18C14.14,15 13.12,13.65 13.29,12.11C13.45,10.66 14.64,9.56 16,9.61M8.62,9.61C9.95,9.65 11.06,10.78 11.16,12.21C11.28,13.75 10.21,15.08 8.78,15.19H8.77C7.34,15.3 6.08,14.14 5.96,12.6V12.6C5.85,11.06 6.92,9.73 8.35,9.62V9.62C8.44,9.61 8.53,9.61 8.62,9.61M8.64,11.31C8.6,11.31 8.57,11.31 8.53,11.32C7.97,11.39 7.57,11.9 7.64,12.45C7.7,13 8.21,13.39 8.77,13.32C9.33,13.25 9.73,12.74 9.67,12.19C9.61,11.67 9.15,11.3 8.64,11.31M15.94,11.33C15.42,11.35 15,11.75 14.96,12.28C14.92,12.83 15.35,13.31 15.91,13.34C16.5,13.38 16.96,12.95 17,12.4C17.04,11.84 16.61,11.36 16.05,11.33C16,11.33 16,11.33 15.94,11.33M8.71,16.15C9,16.14 9.26,16.23 9.5,16.28C10.68,16.5 11.7,16.53 12.19,16.53C12.68,16.53 13.69,16.5 14.86,16.28C15.27,16.2 15.74,16.03 16.11,16.28C16.59,16.6 16.24,17.75 15.5,18.53C15.04,19 13.97,19.91 12.19,19.91C10.41,19.91 9.33,19 8.88,18.53C8.14,17.75 7.79,16.6 8.26,16.28C8.4,16.19 8.55,16.15 8.71,16.15Z",
	Pump: "M19,14.5C19,14.5 21,16.67 21,18A2,2 0 0,1 19,20A2,2 0 0,1 17,18C17,16.67 19,14.5 19,14.5M5,18V9A2,2 0 0,1 3,7A2,2 0 0,1 5,5V4A2,2 0 0,1 7,2H9A2,2 0 0,1 11,4V5H19A2,2 0 0,1 21,7V9L21,11A1,1 0 0,1 22,12A1,1 0 0,1 21,13H17A1,1 0 0,1 16,12A1,1 0 0,1 17,11V9H11V18H12A2,2 0 0,1 14,20V22H2V20A2,2 0 0,1 4,18H5Z",
	Heater: "M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z",
	LedStrip: "M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z",
	Door: "M16,11H18V13H16V11M12,3H19C20.11,3 21,3.89 21,5V19H22V21H2V19H10V5C10,3.89 10.89,3 12,3M12,5V19H19V5H12Z",
	OutdoorLamp: "M15 22H13C11.9 22 11 21.1 11 20V15H17V20C17 21.1 16.1 22 15 22M7 14H21L15 9.71V6C15 4.39 13.94 2 11 2S7 4.39 7 6C7 6.45 6.81 7 6 7H5V3H3V12H5V9H6C8.2 9 9 7.21 9 6C9 5.67 9.1 4 11 4C12.83 4 13 5.54 13 6V9.71L7 14Z",
	VrDevice: "M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M6,9H7.5L8.5,12.43L9.5,9H11L9.25,15H7.75L6,9M13,9H16.5C17.35,9 18,9.65 18,10.5V11.5C18,12.1 17.6,12.65 17.1,12.9L18,15H16.5L15.65,13H14.5V15H13V9M14.5,10.5V11.5H16.5V10.5H14.5Z",
	VrLighthouse: "M8,10V8H9V4H8V3L12,1L16,3V4H15V8H16V10H14.74L8.44,13.64L9,10H8M13,8V4H11V8H13M7,23L7.04,22.76L16.15,17.5L16.67,20.88L13,23H7M8.05,16.17L15.31,12L15.83,15.37L7.43,20.22L8.05,16.17Z",
	FairyLights: "M22.56 11.39C22.36 10.59 21.82 9.85 21.05 9.44L20.63 7.74C21.11 7.58 21.57 7.41 22 7.23V5C20 6.07 16.53 7.03 12 7.03S4 6.07 2 5V7.23C2.43 7.41 2.89 7.58 3.37 7.74L2.95 9.44C2.18 9.85 1.64 10.59 1.44 11.39C.905 13.57 .385 17.31 2.92 17.93C4 18.2 6 17.89 7.27 12.82C7.46 12 7.33 11.12 6.84 10.39L7.26 8.67C8.14 8.81 9.05 8.9 10 8.96V10.74C9.35 11.33 9 12.17 9 13C9 15.24 9.39 19 12 19C13.12 19 15 18.22 15 13C15 12.17 14.65 11.33 14 10.74V8.96C14.95 8.9 15.86 8.81 16.74 8.67L17.16 10.39C16.67 11.12 16.54 12 16.73 12.82C18 17.89 20 18.2 21.08 17.93C23.61 17.31 23.09 13.57 22.56 11.39M5.81 12.47C5.81 12.47 4.74 16.84 3.28 16.5C1.82 16.12 2.9 11.75 2.9 11.75S3.26 10.29 4.71 10.65 5.81 12.47 5.81 12.47M12 17.5C10.5 17.5 10.5 13 10.5 13S10.5 11.5 12 11.5 13.5 13 13.5 13 13.5 17.5 12 17.5M20.72 16.5C19.27 16.84 18.19 12.47 18.19 12.47S17.83 11 19.29 10.65 21.1 11.75 21.1 11.75 22.18 16.12 20.72 16.5Z",
	ThreeDPrinterNozzle: "M7,2H17V8H19V13H16.5L13,17H11L7.5,13H5V8H7V2M10,22H2V20H10A1,1 0 0,0 11,19V18H13V19A3,3 0 0,1 10,22Z"
}

export var Sensors = 
[
	{ id: "light.fiona_s_main_light", icon: Icons.CeilingLamp, top: 75, left: 75, area: SensorArea.UpperFloor, name: "Fiona's Main Light" },
	{ id: "switch.06388420e09806cb0107", icon: Icons.Lamp, top: 200, left: 90, area: SensorArea.UpperFloor, name: "Fiona's Bedside Light" },
	{ id: "switch.44458836e868e745fcc1", icon: Icons.Fan, top: 200, left: 20, area: SensorArea.UpperFloor, name: "Fiona's Fan" },
	{ id: "binary_sensor.shithouse", icon: Icons.Poop, top: 275, left: 20, area: SensorArea.UpperFloor, name: "Shithouse" },
	{ id: "switch.4007536724a16004acc2", icon: Icons.ThreeDPrinterNozzle, top: 305, left: 20, area: SensorArea.UpperFloor, name: "3D Printer" },
	{ id: "switch.bfa07c2da4d85fc7efjotv", icon: Icons.CeilingLamp, top: 75, left: 400, area: SensorArea.UpperFloor, name: "Bridge Main light" },
	{ id: "switch.ambient_lights", icon: Icons.LedStrip, top: 50, left: 275, area: SensorArea.UpperFloor, name: "Bridge Ambient Lights" },
	{ id: "light.upstairs_landing_light", icon: Icons.CeilingLamp, top: 200, left: 210, area: SensorArea.UpperFloor, name: "Upstairs Landing Light" },
	{ id: "light.jay_s_main_light", icon: Icons.CeilingLamp, top: 275, left: 450, area: SensorArea.UpperFloor, name: "Jay's main Light" },
	{ id: "switch.06388420e09806ca9e71", icon: Icons.Lamp, top: 225, left: 525, area: SensorArea.UpperFloor, name: "Jay's Bedside Light" },
	{ id: "switch.44458836c4dd573020c3", icon: Icons.Fan, top: 250, left: 525, area: SensorArea.UpperFloor, name: "Jay's Fan" },

	{ id: "binary_sensor.kitchen", icon: Icons.MotionSensor, left: 25, top: 50, area: SensorArea.LowerFloor, name: "Kitchen Motion Sensor" },
	{ id: "binary_sensor.back_door", icon: Icons.Door, left: 50, top: 325, area: SensorArea.LowerFloor, name: "Back Door" },
	{ id: "binary_sensor.airlock_1_door", icon: Icons.Door, left: 275, top: 15, area: SensorArea.LowerFloor, name: "Airlock 1 Door" },
	{ id: "light.downstairs_landing_light", icon: Icons.CeilingLamp, left: 275, top: 65, area: SensorArea.LowerFloor, name: "Downstairs Landing Light" },
	{ id: "binary_sensor.airlock_1", icon: Icons.MotionSensor, left: 275, top: 115, area: SensorArea.LowerFloor, name: "Airlock 1 Motion Sensor" },
	{ id: "switch.06388420600194f98831", icon: Icons.OutdoorLamp, left: 275, top: -30, area: SensorArea.LowerFloor, name: "Airlock 1 Light" },
	{ id: "binary_sensor.front_door_motion", icon: Icons.MotionSensor, left: 175, top: -30, area: SensorArea.LowerFloor, name: "Forward Sensor Array" },
	{ id: "switch.6000521070039fce63b6", icon: Icons.Fan, left: 525, top: 75, area: SensorArea.LowerFloor, name: "Lounge Fan" },
	{ id: "switch.4007536724a160038cca", icon: Icons.FloorLamp, left: 525, top: 150, area: SensorArea.LowerFloor, name: "Uplight (Left)" },
	{ id: "switch.06388420e09806ca7220", icon: Icons.FloorLamp, left: 525, top: 250, area: SensorArea.LowerFloor, name: "Uplight (Right)" },
	{ id: "switch.3667230784f3ebe936c8_2", icon: Icons.VrDevice, left: 350, top: 200, area: SensorArea.LowerFloor, name: "Index Headset" },
	{ id: "switch.3667230784f3ebe936c8_1", icon: Icons.VrLighthouse, left: 350, top: 300, area: SensorArea.LowerFloor, name: "Base Station (Left)" },
	{ id: "switch.4007536770039fd1113d", icon: Icons.VrLighthouse, left: 525, top: 25, area: SensorArea.LowerFloor, name: "Base Station (Right)" },
	{ id: "binary_sensor.lounge", icon: Icons.MotionSensor, left: 525, top: 325, area: SensorArea.LowerFloor, name: "Lounge Motion Sensor" },
	{ id: "binary_sensor.observation_deck_door", icon: Icons.Door, left: 425, top: 425, area: SensorArea.LowerFloor, name: "Observation Deck Door" },
	{ id: "switch.3667230784f3ebe936c8_3", icon: Icons.CeilingLamp, left: 425, top: 475, area: SensorArea.LowerFloor, name: "Observation Deck main Light" },
	{ id: "switch.4445883670039f68edf6", icon: Icons.FairyLights, left: 525, top: 475, area: SensorArea.LowerFloor, name: "Observation Deck Fairy Lights" },
	{ id: "binary_sensor.garden_motion", icon: Icons.MotionSensor, left: 250, top: 400, area: SensorArea.LowerFloor, name: "Aft Sensor Array" }
]

export var LowerRooms = 
[
	{ title: "KITCHEN", path: "M 0 0 L 170 0 L 170 160 L 235 160 L 235 140 L 302 140 L 302 349 L 0 349 L 0 0", top: 10, left: 10 },
	{ title: "LOUNGE", path: "M 0 0 L 215 0 L 230 15 L 230 349 L 0 349 L 0 0", top: 10, left: 320 },
	{ title: "OBSERVATION DECK", path: "M 0 0 L 230 0 L 230 120 L 170 180 L 60 180 L 0 120 L 0 0", top: 378, left: 320 },
];

export var UpperRooms = 
[
	{ title: "FIONA'S BUNK", path: "M 0 0 L 175 0 L 175 160 L 110 160 L 110 225 L 80 225 L 0 225 L 0 0", top: 10, left: 10},
	{ title: "OPS", path: "M 0 0 L 175 0 L 175 115 L 15 115 L 0 100 L 0 0", top: 243, left: 10 },
	{ title: "BATHROOM", path: "M 0 0 L 152 0 L 152 115 L 0 115 L 0 0", top: 243, left: 193 },
	{ title: "BRIDGE", path: "M 0 0 L 285 0 L 300 15 L 300 160 L 0 160 L 0 0", top: 10, left: 250 },
	{ title: "JAY'S BUNK", path: "M 0 0 L 196 0 L 196 180 L 0 180 L 0 0", top: 178, left: 353 },
];

const glowingShadow:fabric.Shadow = new fabric.Shadow({
	color: Palette.LightGreen,
	blur: 20
});

export const sensorShadow:fabric.Shadow = new fabric.Shadow({
	color: Palette.Yellow, 
	blur: 20
});

export const noShadow:fabric.Shadow = new fabric.Shadow({
	color: Palette.None,
	blur: 0
})
	
export var Styles =
{
	RoomTitleStyle: { left: 5, top: 5, fontFamily: "Pirulen Rg", fontSize: 15, fill: "white", charSpacing: 0 },
	RoomStyle: { stroke: Palette.Blue, strokeWidth: 1, fill: "rgba(100,130,224,0.2)" },
	DoorStyle: { stroke: "rgba(255, 255, 255, 0.6)", fill: "rgba(0,0,0,0)", strokeLineCap: "square", strokeWidth: 1 },
	GlowingLine: { stroke: "white", shadow: glowingShadow, fill: "rgba(0,0,0,0)", strokeLineCap: "square", strokeWidth: 3 }
}

export var temperatureSensors = [
	"sensor.kitchen",
	"sensor.bridge",
	"sensor.observation_deck",
	"sensor.outside_air"
];

export const TOKEN = "";
export const API_BASE = "https://instance/api";
export const ALARM_ENTITY_ID = "alarm_id";