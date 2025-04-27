import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller('users')
export class usersController {
  @Get()
  find(): { id: number; name: string }[] {
    return [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
    ];
  }

  @Get(':id')
  findOne(): { id: number; name: string } {
    return { id: 1, name: 'User 1' };
  }

  @Post()
  create(): { id: 1; name: 'User 1' } {
    return { id: 1, name: 'User 1' };
  }

  @Delete()
  remove(): string {
    return 'user deleted';
  }

  @Put()
  update(): string {
    return 'user updated';
  }
}
