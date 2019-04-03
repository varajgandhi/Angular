import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  //this is an data dependancy injection
  constructor(private router: Router){ }

  ngOnInit() {
  }

  goToHomepage(){
    this.router.navigate(['contacts']);
/* this goes to /contacts/1/edit
    this.router.navigate(['contacts',1,'edit']);
    */
  }

}
