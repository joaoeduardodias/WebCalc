import { User } from "../database/entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";



interface IUsersRepository {
  create({email,name,socket_id}: ICreateUserDTO): Promise<User>
  findByEmail(email: string): Promise<User>
  update(email: string,name: string, socket_id: string): Promise<void>

}

export {IUsersRepository}