import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail'
  
  emails = [
    {email:'gfds@gmail.com', important: true, mySubjects:"New windows" ,myContent: "Enchantress of numbers"},
    {email:'arq@yahoo.com', important:true ,mySubjects:" Programming" ,myContent:"New algorithm for shadow volumes"},
    {email: 'krysia@gamil.com', important:false ,mySubjects:" Uploaded Algo" ,myContent:"Just kidding"},
    {email:'asd@gmail.com', important: false,mySubjects:"Windows IX will launch in 2100" ,myContent:"Tralalala"}
 
  ]
}
