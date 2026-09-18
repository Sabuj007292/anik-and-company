import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
  data?: ContactEnquiry | ContactEnquiry[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly http = inject(HttpClient);

  private readonly API_URL =
    `${environment.apiUrl}/contact`;

  // ==========================================
  // CREATE CONTACT
  // ==========================================

  createContact(
    enquiry: ContactEnquiry
  ): Observable<ContactResponse> {

    return this.http.post<ContactResponse>(
      this.API_URL,
      enquiry
    );
  }

  // ==========================================
  // GET CONTACTS
  // ==========================================

  getContacts(): Observable<ContactResponse> {

    return this.http.get<ContactResponse>(
      this.API_URL
    );
  }
}