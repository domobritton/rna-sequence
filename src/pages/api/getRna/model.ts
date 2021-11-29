export interface Range {
  start: number;
  end: number;
}

export interface Count {
  name: string;
  count: number;
  range: Range;
}

export interface Annotation {
  Gene: string;
  range: Range;
}

export interface RnaData {
  counts: Count[];
  annotations: Annotation[];
}

export interface RemoteRnaData {
  data: RnaData;
}
