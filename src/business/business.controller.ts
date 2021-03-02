import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AllBusinessResponse } from 'src/data-types/responses';
import { Business } from 'src/data-types/schemas';
import { BusinessService } from './business.service';

@ApiTags('Business')
@Controller('/api/v1/business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @ApiResponse({
    status: 200,
    description: 'Get all businesses (will be deprecated for future versions)',
    type: [AllBusinessResponse],
  })
  @Get('/all')
  getAllBusinesses(): Promise<AllBusinessResponse[]> {
    return this.businessService.getAllBusinesses();
  }

  @ApiResponse({
    status: 200,
    description: 'Get all businesses (will be deprecated for future versions)',
    type: Business,
  })
  @Get('/:id')
  getBusinessById(@Param('id') id: string): Promise<Business> {
    return this.businessService.getBusinessById(id);
  }
}
