import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IStroies } from './interface/stories.interface';


@Controller('/stories')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Array<IStroies> {
    return this.appService.getAll();
  }
}
