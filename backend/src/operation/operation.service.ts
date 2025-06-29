import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePickUpPointRequestDto } from './dto/create-pick-up-point-request.dto';
import { CreatePickUpPointResponseDto } from './dto/create-pick-up-point-response.dto';
import { AllPickUpPointResponseDto } from './dto/all-pick-up-point-response.dto';
import { CreateVehicleRequestDto } from './dto/create-vehicle-request.dto';
import { CreateVehicleResponseDto } from './dto/create-vehicle-response.dto';
import { AllVehiclesResponseDto } from './dto/all-vehicles-response.dto';

@Injectable()
export class OperationService {
  constructor(private readonly prisma: PrismaService) {}

  async allVehicles(): Promise<AllVehiclesResponseDto[]> {
    const vehicles = await this.prisma.vehicle.findMany();
    return vehicles.map((vehicle) => ({
      id: vehicle.id,
      name: vehicle.name,
      type: vehicle.type,
      pricePerKm: vehicle.pricePerKm,
      pricePerHour: vehicle.pricePerHour,
      capacityInKg: vehicle.capacityInKg,
      capacityInM3: vehicle.capacityInM3,
      available: vehicle.available,
    }));
  }

  async allPickUpPoint(): Promise<AllPickUpPointResponseDto[]> {
    const pickUpPoints = await this.prisma.pickUpPoint.findMany();
    return pickUpPoints.map((pickUpPoint) => ({
      id: pickUpPoint.id,
      name: pickUpPoint.name,
      address: pickUpPoint.address,
      city: pickUpPoint.city,
      zipCode: pickUpPoint.zipCode,
      country: pickUpPoint.country,
      latitude: pickUpPoint.latitude,
      longitude: pickUpPoint.longitude,
      createdAt: pickUpPoint.createdAt,
      updatedAt: pickUpPoint.updatedAt,
    }));
  }

  async createPickUpPoint(
    body: CreatePickUpPointRequestDto,
  ): Promise<CreatePickUpPointResponseDto> {
    await this.prisma.pickUpPoint.create({
      data: body,
    });

    return {
      message: 'Pick up point created successfully',
      success: true,
    };
  }

  async createVehicle(
    body: CreateVehicleRequestDto,
  ): Promise<CreateVehicleResponseDto> {
    await this.prisma.vehicle.create({
      data: body,
    });

    return {
      message: 'Vehicle created successfully',
      success: true,
    };
  }
}
