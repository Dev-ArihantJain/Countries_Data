import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private jsonUrl = 'assets/data.json';

  constructor() {}

  getCountries(): Observable<any> {
    const fetchPromise = fetch(this.jsonUrl).then((response) =>
      response.json()
    );
    return from(fetchPromise);
  }
}
