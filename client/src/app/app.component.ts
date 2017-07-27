import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Dashboard";
  isCollapsed: boolean = false;

  navbarChanged(event){
    console.log(event);
    this.isCollapsed = event;
  }

}
