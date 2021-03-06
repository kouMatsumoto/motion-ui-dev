/**
 * Used in partially supported device
 */
export type PartialDeviceMotion = {
  readonly interval: number;
  readonly acceleration: {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
  } | null;
  readonly accelerationIncludingGravity: {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
  } | null;
  readonly rotationRate: {
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
  } | null;
};

/**
 * Used in full-supported device
 */
export type DeviceMotion = {
  readonly interval: number;
  readonly acceleration: {
    readonly x: number;
    readonly y: number;
    readonly z: number;
  };
  readonly accelerationIncludingGravity: {
    readonly x: number;
    readonly y: number;
    readonly z: number;
  };
  readonly rotationRate: {
    readonly alpha: number;
    readonly beta: number;
    readonly gamma: number;
  };
};

export type DeviceMotionValue = {
  acceleration: DeviceMotion['acceleration'];
  accelerationIncludingGravity: DeviceMotion['accelerationIncludingGravity'];
  rotationRate: DeviceMotion['rotationRate'];
};

// TODO: consider unify to DeviceMotionAsTuple
export type DeviceMotionWithChange = {
  data: DeviceMotion;
  change: DeviceMotionValue;
};

// data provided from window deviceorientation event
export type PartialDeviceOrientation = {
  readonly absolute: boolean;
  readonly alpha: number | null;
  readonly beta: number | null;
  readonly gamma: number | null;
};

// in full-supported device
export type DeviceOrientation = {
  readonly absolute: boolean;
  readonly alpha: number;
  readonly beta: number;
  readonly gamma: number;
};

// TODO: add mid
export type SummaryValue = {
  readonly max: number;
  readonly min: number;
  readonly avg: number;
};

export type MotionSummary = {
  readonly acceleration: {
    readonly x: SummaryValue;
    readonly y: SummaryValue;
    readonly z: SummaryValue;
  };
  readonly accelerationIncludingGravity: {
    readonly x: SummaryValue;
    readonly y: SummaryValue;
    readonly z: SummaryValue;
  };
  readonly rotationRate: {
    readonly alpha: SummaryValue;
    readonly beta: SummaryValue;
    readonly gamma: SummaryValue;
  };
};
