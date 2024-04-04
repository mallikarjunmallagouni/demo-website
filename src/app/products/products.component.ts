import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit {
constructor(){}
ngOnInit(): void {
  
}
products=[
  {id:1, name:"watch",price:'109',color:"black",availabel:"Availabel",Image:"/assets/watch.jpg"},
  {id:2, name:"smart-tv",price:'110',color:"white",availabel:"Not Availabel",Image:"/assets/smart-tv.jpg"},
  {id:3, name:"apple-iphone",price:'112',color:"white",availabel:"Availabel",Image:"/assets/apple-iphone.jpg"},
  {id:4, name:"washing-machinne",price:'113',color:"silver",availabel:"Not Availabel",Image:"/assets/washing-machinne.jpg"},
  {id:5, name:"refrigirator",price:'114',color:"gray",availabel:"Availabel",Image:"/assets/refrigirator.jpg"},
  {id:6, name:"dell-inspiron",price:'115',color:"gray",availabel:"Availabel",Image:"/assets/dell-inspiron.jpg"}
]
}
