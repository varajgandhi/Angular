import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [
  `.redText{
    color:red;
  }
 .greenText{
    color:green;
  }`
  ]
})
export class PbComponent implements OnInit {

  personName: string= "varalakshmi";
  constructor() { }

  ngOnInit() {
  }

  isAllowed(){
    return true;
  }

}
