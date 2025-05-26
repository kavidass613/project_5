import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {

  text:boolean=true

  show(){
    this.text=true
  }

  hide(){
    this.text=false
  }

  //

  text1:boolean=true

  //

  input1:string="";
  input2:string="";


  text2:boolean=true;

  show2(){
    this.text2=true
  }
  hide2(){
    this.text2=false
  }

  //

  checBox2:boolean=true;

  //

  input3:string="";
  input4:string="";
}
