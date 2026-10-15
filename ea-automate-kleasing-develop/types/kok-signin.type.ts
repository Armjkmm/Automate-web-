export type OfferingType = 'NEW' | 'USED';
export type VehicleType = 'CAR' | 'BIGBIKE';

export interface KokTypeParams {
  offeringType: OfferingType;
  vehicleType: VehicleType;
}
