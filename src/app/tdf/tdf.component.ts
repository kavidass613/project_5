import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  imports: [FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  studentData:User={
    id: null,
    name: '',
    mobilenumber: null
  }


  onSubmit(data:any){
    console.log(data.value);
    
  }

  setValues(data:NgForm){
    let values = {
      id:1,
      name:"kavi",
      mobilenumber:"11122222333"
    }
    data.setValue(values)
  }

  patchValues(data:NgForm){
    let values = {
      id:2,
      name:"ponneelan"
    }
    data.control.patchValue(values)
  }

  resetValues(data:NgForm){
    data.reset()
  }
}
