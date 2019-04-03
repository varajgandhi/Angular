import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  timeofLastVisit: any;
  receiveLoggedIn: any;
  constructor() { }

  ngOnInit() {
  }

}
