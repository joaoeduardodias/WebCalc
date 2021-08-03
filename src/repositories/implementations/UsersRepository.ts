import { getRepository, Repository } from "typeorm";
import { User } from "../../database/entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }
  

 async create({ email, name, socket_id }: ICreateUserDTO): Promise<User> {
   const user = this.repository.create({
     name,
     email,
     socket_id
   })
   await this.repository.save(user)
   return user;
  }
  async findByEmail(email: string): Promise<User> {
    const  user = await this.repository.findOne({email})
    return user;
  }
  async update(email: string, name: string, socket_id: string): Promise<void> {
    const  user = await this.repository.findOne({email})
    user.socket_id = socket_id
    user.name = name
    await this.repository.save(user)
  }
 

}

export { UsersRepository }