import { getRepository, Repository } from "typeorm";
import { Dashboard } from "../../database/entities/Dashboard";
import { User } from "../../database/entities/User";
import { ICreateDashboardDTO } from "../../dtos/ICreateDashboardDTO";
import { IDashboardRepository } from "../IDashboardRepository";


class DashboardRepository implements IDashboardRepository {
  private repository: Repository<Dashboard>

  constructor(){
    this.repository = getRepository(Dashboard)
  }
 

 async create({ calculation, result, user_id }: ICreateDashboardDTO): Promise<Dashboard> {
    const dashboard =  this.repository.create({
      calculation,
      user_id,
      result
    })
    await this.repository.save(dashboard)
    return dashboard
  }

  async  list(): Promise<Dashboard[]> {
    const dashboards = await this.repository.find({ relations: ["user"] })
    return dashboards
  }


}

export {DashboardRepository}