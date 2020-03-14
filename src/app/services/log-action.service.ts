import { Injectable } from '@angular/core';
import { HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/internal/operators';



@Injectable({
  providedIn: 'root'
})
export class LogActionService {

  constructor(private http: HttpClient) { }


  // Posts to the rails app; typically sends a route, but could really be any type and value.
  saveAction(type: string, value: string) {
    return this.http
      .post('/api/saveaction', {type: type, value: value}, { observe: 'response', responseType: 'text' });

  }
}
