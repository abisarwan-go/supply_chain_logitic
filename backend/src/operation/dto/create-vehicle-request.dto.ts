import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  MinLength,
  Min,
  IsBoolean,
  IsEnum,
} from 'class-validator';

import { VehicleType } from 'generated/prisma';

export class CreateVehicleRequestDto {
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    enum: VehicleType,
  })
  @IsEnum(VehicleType)
  type: VehicleType;

  @IsNumber()
  @Min(0)
  pricePerKm: number;

  @IsNumber()
  @Min(0)
  pricePerHour: number;

  @IsNumber()
  @Min(0)
  capacityInKg: number;

  @IsNumber()
  @Min(0)
  capacityInM3: number;

  @IsBoolean()
  available: boolean;
}
