import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
     <p>this website uses cookies to provide better user experience.</p> 
     <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
     </div>`,
  styles: [".notification-div{margin:10px 0px; padding:20px; background-color: #fad7a0; text-align:center;}",
            ".close{float:right; margin-top: -15px;}",
          ".fadeOut{visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {
constructor(){}
ngOnInit(): void {
  
}
displayNotification: boolean= false ;

closeNotification(){
  this.displayNotification = true ;
}
}
