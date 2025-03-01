import { Component } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private auth!: AppRoutingModule

  constructor(auth: AppRoutingModule) {
    this.auth = auth
  }
}
