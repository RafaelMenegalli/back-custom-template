import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    async list() {
        console.log("Listando os usuários no Repository...")
    }
}