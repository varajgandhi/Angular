import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Contact } from '../../../model/contact';


declare var $ : any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [`.right_align{
    margin-left:20px;
  }`]
})
export class ContactDetailsComponent implements OnInit {

  contactData : Contact; //here Contact is an interface
  contactId: number;
  editableContactData: Contact;
  constructor( private contactservice: ContactsService, private activatedRoute: ActivatedRoute,private router: Router) {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params);
      this.contactId=params.id;
    });
  }

  ngOnInit() {
    this.contactservice.getContactid(this.contactId)
      .subscribe((response)=>{
      console.log(response);
      this.contactData = response;
     // this.editableContactData = JSON.parse(JSON.stringify(this.editableContactData));
      });
  }

  lanchEditModal(){
    $('#exampleModal').modal('show');
    this.editableContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  updateContact() {
    this.contactservice.updateContactById(this.editableContactData)
    .subscribe((response)=>{
    console.log(response);
    this.contactData=this.editableContactData;
    //this.editableContactData=JSON.parse(JSON.stringify(this.contactData));

    setTimeout(()=>{
      $('#exampleModal').modal('hide');
  }, 10);
    });
    }

    deleteContacts(){
      this.contactservice.deleteContactByUserId(this.contactData)
     .subscribe((response)=>{
      console.log(response);
      this.contactData=response;

      setTimeout(()=>{
          this.router.navigate(['contacts']);
      }, 300);
    });
  }

}
