import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/states/app.state';
import { Message } from '../../model/message.model';
import { selectMessages } from '../../store/selectors/message.selectors';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.messages$ = this.store.pipe(select(selectMessages));
  }

}
