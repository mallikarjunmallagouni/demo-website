import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    
  }
  sayHell(inputEL: HTMLInputElement){
    // alert("Hello " + inputEL.value)
    console.log(inputEL);
    
  }
}
