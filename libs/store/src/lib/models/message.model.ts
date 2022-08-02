import { Chat } from './chat.model';

export interface Message {
    id: string;
    userId: string;
    fromMe: boolean;
    chatId: Chat['id'];
    image?: string;
    body: string;
    createdAt: Date;
}