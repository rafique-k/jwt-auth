import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { CONSTANTS } from "src/constant";

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "rafique",
            password: "rafique@123",
            email: "rafique@gmail.com",
            age: 30,
            role: CONSTANTS.ROLES.ANDROID_DEVELOPER
        },
        {
            username: "sankalp",
            password: "sankalp@123",
            email: "sankalp@gmail.com",
            age: 27,
            role: CONSTANTS.ROLES.WEB_DEVELOPER
        },
        {
            username: "hitesh",
            password: "hitesh@123",
            email: "hitesh@gmail.com",
            age: 30,
            role: CONSTANTS.ROLES.ANDROID_DEVELOPER
        }
    ];

    getUserByUserName(userName: string): User
    {
        return this.users.find((user : User) => user.username == userName );
    }

    getUserByEmail(emailId: string): User
    {
        return this.users.find((user: User) => user.email == emailId);
    }
}