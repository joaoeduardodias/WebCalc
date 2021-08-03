import { Dashboard } from "../database/entities/Dashboard";
import { ICreateDashboardDTO } from "../dtos/ICreateDashboardDTO";


interface IDashboardRepository {

  list(): Promise<Dashboard[]>
  create({calculation,result,user_id}: ICreateDashboardDTO): Promise<Dashboard>

}

export { IDashboardRepository }