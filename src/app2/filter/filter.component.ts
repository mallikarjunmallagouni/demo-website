import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
constructor(private service:CoursesComponent){}
ngOnInit(): void {
  
}
@Input('total') all: number = 0;
@Input() free: number = 0;
@Input() premium: number = 0;
selectRadioButtonValue : string ='All';

@Output()
filterRadioButtonSelectionChnaged: EventEmitter<string> = new EventEmitter<string>();

onRadioButtonSelectionChanged(){
  this.filterRadioButtonSelectionChnaged.emit(this.selectRadioButtonValue)
  // console.log(this.selectRadioButtonValue);
}
// console.log(this.selectRadioButtonValue);

}
