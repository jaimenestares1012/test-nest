import {
  IsInt,
  IsPositive,
  Min,
  IsString,
  IsOptional,
  IsNumber,
  MinLength,
} from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset?: number;
}
