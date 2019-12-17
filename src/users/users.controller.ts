import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
@Crud({
  model: {
    type: User,
  },
})
export class UsersController {
  constructor(public service: UsersService) {}
}
