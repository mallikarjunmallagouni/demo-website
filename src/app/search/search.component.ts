import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
constructor(){}
ngOnInit(): void {
  
}
searchvalue: string='mallikarjun';

changeSearchValue(eventData: Event){ 
// console.log((<HTMLInputElement>eventData.target).value);
this.searchvalue = (<HTMLInputElement>eventData.target).value
}
}
  