import { VehicleType } from 'generated/prisma';

export class AllVehiclesResponseDto {
  id: string;
  name: string;
  type: VehicleType;
  pricePerKm: number;
  pricePerHour: number;
  capacityInKg: number;
  capacityInM3: number;
  available: boolean;
}
