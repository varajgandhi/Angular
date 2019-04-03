import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // selector 
  //selector: '#app-root', // selector 
  //selector: '.app-root', // selector 
  //selector: '[app-root]', // selector 
  templateUrl: './app.component.html',  //html
  styleUrls: ['./app.component.scss'] //scss
})
export class AppComponent {//ts
  title = 'phonebook';
  timeofLastVisit = "Yesterday";

  receiveLoggedIn($event){
    alert($event);
  }
}
