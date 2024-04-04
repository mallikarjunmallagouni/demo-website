import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [ 
  {id: 101, name:'Javascript for beginners', author:'Dharma', duration:48, type:'free',
    price:0.00, rating:3.5, image:'/assets/javascript.png',
    description:'In this course you will learn the fundamentals of Javascript. this course is purly designed for beginners'},
    {id: 102, name:'Angular fram work', author:'Dharma', duration:29, type:'premium',
    price:129.00, rating:4.5, image:'/assets/Angular.png',
    description:'In this course you will learn the fundamentals of Angular fram work . this course is purly designed for beginners'},
    {id: 103, name:'React for beginners', author:'Dharma', duration:18.5, type:'free',
    price:0.00, rating:4.0, image:'/assets/react.png',
    description:'In this course you will learn the fundamentals of React. this course is purly designed for beginners'},
    {id: 104, name:'Advance Angular Course', author:'Dharma', duration:19.5, type:'premium',
    price:145.50, rating:4.8, image:'/assets/Advance-Angular.png ',
    description:'In this course you will learn the fundamentals of Advance Angular Course. this course is purly designed for beginners'},
    {id: 105, name:'Advance Javascript Course', author:'Dharma', duration:60, type:'premium',
    price:150.00, rating:4.5, image:'/assets/Advance-Javascript.png',
    description:'In this course you will learn the fundamentals ofAdvance Javascript Course. this course is purly designed for beginners'}
   ]
   getTotalCourses(){
    return this.courses.length;
   }
   getTotalFreeCourses(){
    return this.courses.filter(course=>course.type === 'free').length
   }
   getTotalPremiumCourses(){
    return this.courses.filter(course=>course.type === 'premium').length
   }
  courseCountRadioButton: string = 'All';
   searchText: string ='';

   onFilterRadioButtonChanged(data:string){
 
    this.courseCountRadioButton= data;
   }
   onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
   }
}
