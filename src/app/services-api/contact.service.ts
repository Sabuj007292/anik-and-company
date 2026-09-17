// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class ContactService {

// // constructor() { }

// // }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {

//   private apiUrl = 'http://localhost:5000/api/contact';

//   constructor(private http: HttpClient) {}

//   saveContact(data: any) {
//     return this.http.post(this.apiUrl, data);
//   }
// }


import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactEnquiry {
  _id?: string;
  fullName: string;
  mobile: string;
  email: string;
  location: string;
  service: string;
  message: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  count?: number;
  data?: ContactEnquiry[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly http = inject(HttpClient);

  private readonly API_URL =
    'https://www.anikandco.com/api/contact';

  /**
   * Create new contact enquiry
   */
  createContact(
    enquiry: ContactEnquiry
  ): Observable<ContactResponse> {

    return this.http.post<ContactResponse>(
      this.API_URL,
      enquiry,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
  }

  /**
   * Get all contact enquiries
   */
  getContacts(): Observable<ContactResponse> {

    return this.http.get<ContactResponse>(
      this.API_URL,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    );
  }
}