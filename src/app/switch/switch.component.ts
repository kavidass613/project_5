import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch',
  imports: [CommonModule,FormsModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {

  value:number=0;

  grade(data:number){
    this.value=data
  }

  ///

  value1:number=0;

  grade1(data:number){
    this.value1=data
  }

  days:string[]=["mon","tue","wed","the","fri","sat","sun"]
  data:string="";
}
