import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotifyService } from './notify.service';
import { UpdateNotifyDto } from './dto/update-notify.dto';
import { ApiTags } from '@nestjs/swagger';
// import { ParsMoneyPipe } from 'src/common/pipes/pars-money.pipe';

@Controller('notify')
@ApiTags('Notify')
export class NotifyController {
  constructor(private readonly notifyService: NotifyService) {}

  @Post('/:category/:price')
  // create(@Param('price', ParsMoneyPipe) price, @Param('category') category) {
  create(@Param('price') price, @Param('category') category) {
    return `category${category} price${price}`;
  }

  @Get()
  findAll() {
    return this.notifyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notifyService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNotifyDto: UpdateNotifyDto) {
  //   return this.notifyService.update(+id);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notifyService.remove(+id);
  }
}
