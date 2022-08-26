import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor(
    private http: HttpClient
  ) { }

  validateState(control: FormControl) {
    return ['MA', 'RI'].includes(control.value) ? null : 'invalid state';
  }

  validateCity = (control: FormControl): Observable<any> => {
    return of(['Boston', 'Worcester', 'Springfield'].includes(control.value) ? null : 'invalid city').pipe(
      delay(3000)
    );
  }
}
