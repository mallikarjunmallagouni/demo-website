import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor() {}
ngOnInit(): void{

}
//string interpolation
slogan: string="Your one stop shop for every thing.";

//property binding
source: string="../../assets/shopping.jpg";

//string interpolation
getslogan(){
  return "this is a new slogan for this web application";
}
}
