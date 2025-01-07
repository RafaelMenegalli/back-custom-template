import { Controller, Get } from "@nestjs/common";
import { UserRepository } from "src/repositories/user.repository";

@Controller("/users")
export class UserController {
    constructor(private userRepository: UserRepository) { }

    @Get()
    async listUsers() {
        await this.userRepository.list()
    }
}