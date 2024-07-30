import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Justification } from '../models/Justification';
import { User } from '../models/User';
import { AccueilCourtierModel } from '../models/AccueilCourtier';

export interface Success {
  message: string;
}

@Injectable()
export class AccueilCourtierService {

  constructor(private http: HttpClient, private messageService: MessageService) { }


  public getCountAd(): Observable<number> {
    console.log("getting CountAD")
    return this.http.get<number>('/api/getCountAd');
  }

    public getCountAs(): Observable<number> {
      console.log("getting CountAS")
      return this.http.get<number>('/api/getCountAs');
    }
  public getCountCc(): Observable<number> {
      console.log("getting CountCC")
      return this.http.get<number>('/api/getCountCc');
    }

     public getCountCa(): Observable<number> {
          console.log("getting CountCA")
          return this.http.get<number>('/api/getCountCa');
        }

    public getConfig (): Observable<any> {
      return this.http.get<number>('/api/getConfiguration');
    }



}

