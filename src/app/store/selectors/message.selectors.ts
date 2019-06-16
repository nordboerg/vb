import { createSelector } from '@ngrx/store';

import { AppState } from '../states/app.state';
import { MessageStore } from '../states/message.state';

const selectMessageStore = (state: AppState) => state.messageStore;

export const selectMessages = createSelector(
  selectMessageStore,
  (state: MessageStore) => state.messages
);
