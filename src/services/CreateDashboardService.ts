import { inject, injectable } from "tsyringe";
import { Dashboard } from "../database/entities/Dashboard";
import { IDashboardRepository } from "../repositories/IDashboardRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest{
  email: string;
  calculation: string;
  result: number;
}


@injectable()
class CreateDashboardService {

  constructor(
    @inject("DashboardRepository")
    private dashboardRepository: IDashboardRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({calculation,result,email}:IRequest):Promise<Dashboard>{
    const user = await this.usersRepository.findByEmail(email)
    const dashboard = await this.dashboardRepository.create({
      calculation,
      result,
      user_id: user.id as string
    })
    return dashboard
    
  }

}

export  { CreateDashboardService}