import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  /*template: `
    <p>
     @copyrights
    </p>
    <app-nav><li class="nav-item">
    <a class="nav-link" href="#">GotoTop</a>
  </li></app-nav>
  `,*/
 templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}