import { inject, injectable } from "tsyringe"
import { User } from "../database/entities/User"
import { IUsersRepository } from "../repositories/IUsersRepository"

interface IRequest {
  email: string;
  name: string;
  socket_id: string;
}

@injectable()
class CreateUserService {
  
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository

  ){}

  async execute({email,name,socket_id}: IRequest): Promise<User>{
    
      const userAlreadyExists = await this.usersRepository.findByEmail(email)
    
      if(userAlreadyExists){
        await this.usersRepository.update(email,name,socket_id)
        return userAlreadyExists
      }
      const user = await this.usersRepository.create({
        name,
        email,
        socket_id
      })
      return user;
    }

}

export { CreateUserService}