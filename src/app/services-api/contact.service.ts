// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {

// constructor() { }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:5000/api/contact';

  constructor(private http: HttpClient) {}

  saveContact(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
