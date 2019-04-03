import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  //data to be passed to parent
  userLoggedIn: string = "vara";
  //to do that you need to emit the events
  //first create custom event
  
  @Output() loggedInEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendLoggedInUser($event){
    this.loggedInEvent.emit(this.userLoggedIn);
  }

}
