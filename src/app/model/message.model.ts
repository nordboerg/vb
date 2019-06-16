export interface Message {
  text: string;
  localId: string;
  delivered?: boolean;
  id?: string;
}
