import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../../../services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../../../model/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  profile: Contact;
  isSaved: boolean;

  constructor(private contactservice:ContactsService, private router: Router) {
    this.profile = {
      username:null,
      phone:null,
      email:null
    }
  }

  ngOnInit() {
  }

  createContactHandler(formData: NgForm){
    //console.log(this.profile);
   console.log(formData.value);
    //step:1 send data to the service
    this.contactservice.create(formData.value)
      .subscribe((response)=>{
        console.log(response);
        this.isSaved = true;

        setTimeout(()=>{
          this.router.navigate(['contacts']);
      }, 3000);
  });


}
}
