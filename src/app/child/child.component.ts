import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()
  child:string="";
  
  @Output()
  childData = new EventEmitter()

  sendData(){
    this.childData.emit("I AM A PARENT")
  }
}
