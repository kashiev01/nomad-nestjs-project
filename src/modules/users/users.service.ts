import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repositories/user.repository';
import { UserDocument } from '../database/models/user.model';
import { CrudService } from '../../helpers/crud.service';

@Injectable()
export class UsersService extends CrudService<UserDocument> {
  constructor(readonly userRepository: UserRepository) {
    super(userRepository);
  }

  async createUser(createUserDto) {
    try {
      return await this.userRepository.create(createUserDto);
    } catch (error) {
      return 'Юзер не создан';
    }
  }

  async findUser(createUserDto) {
    return await this.userRepository.findOne(createUserDto);
  }
}
