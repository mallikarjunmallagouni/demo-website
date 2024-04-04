  import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-search',
  templateUrl: './sub-search.component.html',
  styleUrls: ['./sub-search.component.css']
})
export class SubSearchComponent implements OnInit {
constructor() {}
ngOnInit(): void {
  
}
enteredSearchValue : string = '';

@Output()
searchTextChanged: EventEmitter< string> =new EventEmitter< string>();

onSearchTextChange(){
  this.searchTextChanged.emit(this.enteredSearchValue)
}
}
