import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit, OnDestroy{

  //contactList : Contact;
  contactList : Array<Contact>; 

  constructor(private contactsServive: ContactsService) {
    console.log("Inside COnstructor");
   }

  ngOnInit() {
    console.log("Inside InIt");
    this.contactsServive.getContact()
  .subscribe((response)=>{
    console.log(response);
    this.contactList = response;

  })  }

  ngOnDestroy() {
    console.log("Destroy Please!");
  }

}
