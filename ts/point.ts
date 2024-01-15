interface Point {
    x: number;
    y: number;
  }

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

interface Edge {
  startIx: number;
  endIx: number;
  stroke?: string;
  weight?: number;
}

interface Face {
  opacity?: number;
  fill?: string;
  points: number[];
}

interface Model {
  vectors: Vector3D[];
  edges: Edge[];
  faces: Face[];
}