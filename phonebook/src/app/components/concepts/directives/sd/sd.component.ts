import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  programList: string[];
  birthday = new Date(1988, 3, 15); // April 15, 1988

  loremipsum : string ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum, doloribus natus, quam recusandae sint quod minus non impedit ea aliquam porro placeat provident doloremque debitis architecto iure maxime libero.";

  constructor() {
    this.programList = ["planet on earth","man vs world","Destroyed in deconds"]
   }
  ngOnInit() {
  }

 isPremiumUser(){
   return true;
  }

}
