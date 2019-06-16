import { createReducer, on, Action } from '@ngrx/store';
import * as MessageActions from '../actions/message.actions';

import { MessageStore } from '../states/message.state';

const initialState: MessageStore = {
  messages: []
};

const appReducer = createReducer(
  initialState,
  on(
    MessageActions.storeMessage,
    (state, { message }) => ({ ...state, messages: [...state.messages, message] })
  ),
  on(
    MessageActions.markMessageDelivered,
    (state, { message }) => ({
      ...state,
      messages: state.messages.map(m => {
        if (m.localId === message.localId) {
          m.id = message.id;
          m.delivered = true;
        }

        return m;
      })
    })
  )
);

export function reducer(state: MessageStore | undefined, action: Action) {
  return appReducer(state, action);
}
