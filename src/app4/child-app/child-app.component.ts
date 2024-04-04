import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildDemoComponent } from "../child-demo/child-demo.component";


@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent {
title ='ViewChild';

@ViewChild('dobInput') dateOfBirth!: ElementRef
@ViewChild('ageInput') age!: ElementRef;
@ViewChild(ChildDemoComponent, { static: true })demoComp!: ChildDemoComponent;

calculateAge(){
  let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  this.age.nativeElement.value = age;
  // console.log(this.dateOfBirth);
  // console.log(this.age);
  
}
}
