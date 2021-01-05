import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {

  constructor(private http: HttpClient) { }

  send(contact: Contact) {
    console.log(contact);
  }
}
