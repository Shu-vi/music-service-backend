import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./roles.model";
import { RolesController } from "./roles.controller";

@Module({
  providers: [RolesService],
  exports: [RolesService],
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [RolesController]
})
export class RolesModule {
}
