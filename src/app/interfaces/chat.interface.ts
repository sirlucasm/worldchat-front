import { User } from "./user.interface";

export interface Chat {
    toUser: User;
    startedBy: User;
}