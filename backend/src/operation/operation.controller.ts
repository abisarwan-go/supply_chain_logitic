import { Body, Controller, Get, Post } from '@nestjs/common';

import { OperationService } from './operation.service';
import { CreatePickUpPointRequestDto } from './dto/create-pick-up-point-request.dto';
import { CreatePickUpPointResponseDto } from './dto/create-pick-up-point-response.dto';
import { CreateVehicleRequestDto } from './dto/create-vehicle-request.dto';
import { CreateVehicleResponseDto } from './dto/create-vehicle-response.dto';

@Controller('operation')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Get('all-pick-up-point')
  async allPickUpPoint() {
    return this.operationService.allPickUpPoint();
  }

  @Post('create-pick-up-point')
  async createPickUpPoint(
    @Body() body: CreatePickUpPointRequestDto,
  ): Promise<CreatePickUpPointResponseDto> {
    return this.operationService.createPickUpPoint(body);
  }

  @Post('create-vehicle')
  async createVehicle(
    @Body() body: CreateVehicleRequestDto,
  ): Promise<CreateVehicleResponseDto> {
    return this.operationService.createVehicle(body);
  }

  @Get('all-vehicles')
  async allVehicles() {
    return this.operationService.allVehicles();
  }
}
