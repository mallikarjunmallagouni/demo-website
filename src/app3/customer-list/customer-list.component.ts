import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
constructor() {}
ngOnInit(): void {
  
}
selectedCustomer: any;
customers: Customer[] = [
{customerNo: 1 , name:'Mallikarjun',address:'',city:'Bollaram',country:'india'},
{customerNo: 2 , name:'Gopalakrishna',address:'',city:'Bollaram',country:'india'},
{customerNo: 3 , name:'Raghavendar',address:'',city:'Bollaram',country:'india'},
{customerNo: 4 , name:'Dharma',address:'',city:'Bhimavaram',country:'india'}
]


selected(event:any,customer:any){
let checked = event.target.checked;
if(checked){
 this.selectedCustomer = customer
}else{
  this.selectedCustomer=null
}
}


}
