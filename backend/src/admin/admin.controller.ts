// src/admin/admin.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from '../_entity/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Admin> {
    return this.adminService.findOne(+id);
  }

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() admin: Partial<Admin>,
  ): Promise<Admin> {
    return this.adminService.update(+id, admin);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.adminService.delete(+id);
  }
}
