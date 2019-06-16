import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { MessageService } from 'src/app/services/message.service';
import * as MessageActions from '../actions/message.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class MessageEffects {
  postMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.postMessage),
      mergeMap(action => this.messageService.postMessage(action.message)
        .pipe(
          map(message => MessageActions.markMessageDelivered({ message }))
        )
      )
    )
  );

  constructor(private messageService: MessageService , private actions$: Actions) {}
}
