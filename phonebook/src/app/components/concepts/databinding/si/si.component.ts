import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  personName: string = "varalaskhmi";
  age: number = 20;
  isloggedin: boolean = true;
  myProfile: object = {
    name: "vara",
    city: "cheyyar"
  };

  constructor() { }

  ngOnInit() {
  }

}
