import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/user.controller";
import { UserRepository } from "src/repositories/user.repository";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserRepository]
})

export class UserModule { }