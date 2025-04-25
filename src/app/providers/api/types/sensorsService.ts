type SensorValue = {
  V: number;
  Valid: boolean;
};

export type lastSensorValues = {
  Id: number;
  date: string;
} & {
  [key: string]: SensorValue | number | string;
}
