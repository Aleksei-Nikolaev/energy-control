type SensorValue = {
  V: number;
  Valid: boolean;
};

export type getLastSensorValues = {
  Id: number;
  date: string;
} & {
  [key: string]: SensorValue | number | string;
};
