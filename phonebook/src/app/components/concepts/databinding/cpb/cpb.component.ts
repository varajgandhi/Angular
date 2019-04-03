import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  @Input() lastVisited: any;//@Input act as an custom property,through this we can perform parent to child 
  constructor() { }

  ngOnInit() {
  }

}
