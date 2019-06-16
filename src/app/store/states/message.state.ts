import { Message } from '../../model/message.model';

export interface MessageStore {
  messages: Message[];
}
