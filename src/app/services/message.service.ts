import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Message } from '../model/message.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'https://frontend-code-test.herokuapp.com/messages';

  constructor(private http: HttpClient) { }

  postMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message, httpOptions)
      .pipe(
        catchError(err => of(err))
      );
  }
}
