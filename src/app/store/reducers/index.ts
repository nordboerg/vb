import { ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppState } from '../states/app.state';

import * as fromMessages from './messages.reducers';

export const reducers: ActionReducerMap<AppState, Action> = {
  messageStore: fromMessages.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
