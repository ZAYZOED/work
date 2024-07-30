import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Email} from "../models/Email";
import {User} from "../models/User";

export interface Success {
  message: string;
}

@Injectable()
export class ChangeMailService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

    public getUserInfo(): Observable<any> {
        console.log("getting user info")
        return this.http.get('/api/getCurrentUserInfo').pipe(
            catchError(error => {
                this.messageService.error(error.error);
                console.log("CUSTOM ERROR :", error);
                return of([]);
            })
        )




    }
    public checkoldmail(): Observable<any> {
        console.log("getting user info")
        return this.http.get('/api/checkOldMail').pipe(
            catchError(error => {
                this.messageService.error(error.error);
                console.log("CUSTOM ERROR :", error);
                return of([]);
            })
        )




    }

  public ChangerEmail(mail: Email): Observable<Success> {

      return this.http.put<Email>(`/api/ChangeMail`, mail).pipe(
        catchError(error => {
          this.messageService.error(error.error["message"]);
          return of(null);
        })
    );
  }



}

