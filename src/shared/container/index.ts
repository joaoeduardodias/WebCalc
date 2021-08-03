
import { container } from "tsyringe";
import { IDashboardRepository } from "../../repositories/IDashboardRepository";
import { DashboardRepository } from "../../repositories/implementations/DashboardRepository";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IDashboardRepository>(
  "DashboardRepository",
  DashboardRepository
)