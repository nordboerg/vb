import { createAction, props } from '@ngrx/store';

import { Message } from '../../model/message.model';

export const postMessage = createAction(
  '[Messages] post message',
  props<{ message: Message; }>()
);

export const storeMessage = createAction(
  '[Messages] store message',
  props<{ message: Message; }>()
);

export const markMessageDelivered = createAction(
  '[Messages] mark message delivered',
  props<{ message: Message; }>()
);
