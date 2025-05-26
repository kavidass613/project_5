import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

employees=[
  {
    name:"kavi",
    age:"27"
  },
  {
    name:"ponneelan",
    age:"28"
  }
]

studentName:string[]=["kavi","meena"]

}
