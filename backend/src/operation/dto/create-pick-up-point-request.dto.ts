import { IsLatitude, IsLongitude, IsString, MinLength } from 'class-validator';

export class CreatePickUpPointRequestDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  address: string;

  @IsString()
  @MinLength(3)
  city: string;

  @IsString()
  @MinLength(3)
  zipCode: string;

  @IsString()
  @MinLength(3)
  country: string;

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;
}
