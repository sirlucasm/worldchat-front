import { Chat } from "./chat.interface";
import { User } from "./user.interface";

export interface Message {
    user: { id: number };
    chat: { id: number };
    message?: String;
}