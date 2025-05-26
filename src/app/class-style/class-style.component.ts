import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-style',
  imports: [CommonModule,FormsModule],
  templateUrl: './class-style.component.html',
  styleUrl: './class-style.component.css'
})
export class ClassStyleComponent {

  textColor:string="";

  green(color:string){
    this.textColor=color
  }

  blue(color:string){
    this.textColor=color
  }

  //

  checkBox:boolean=true;

  //

  optionalColor:string="";



  //////


  textColor1:string=""

  green1(color:string){
    this.textColor1=color
  }

  blue1(color:string){
    this.textColor1=color
  }


  //


  checkBox1:boolean=true;

  //

  optionalColor1:string="";
}
