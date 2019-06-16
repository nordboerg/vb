import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/states/app.state';
import * as MessageActions from '../../store/actions/message.actions';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent {

  constructor(private store: Store<AppState>) { }

  sendMessage(messageText: string) {
    const message = {
      text: messageText,
      localId: new Date().getTime().toString(),
      delivered: false
    };

    this.store.dispatch(MessageActions.postMessage({ message }));
    this.store.dispatch(MessageActions.storeMessage({ message }));
  }

}
