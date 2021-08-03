import { inject, injectable } from "tsyringe";
import { Dashboard } from "../database/entities/Dashboard";
import { IDashboardRepository } from "../repositories/IDashboardRepository";


@injectable()
class ListAllCalculationsService {

  constructor(
    @inject("DashboardRepository")
    private dashboardRepository: IDashboardRepository
  ){}

  async execute(): Promise<Dashboard[]>{
    const dashboards = await this.dashboardRepository.list()
    return dashboards
  }
}

export {ListAllCalculationsService}