import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-data',
  imports: [ReactiveFormsModule],
  templateUrl: './create-data.component.html',
  styleUrl: './create-data.component.css'
})
export class CreateDataComponent {
  studentForm!: FormGroup;

  constructor(private data:CrudService ,private fb:FormBuilder , private router:Router){

    this.studentForm=this.fb.group(
      {
        id:["",[Validators.required , Validators.pattern("^[0-9]*$")]],
        name:["",[Validators.required , Validators.pattern("^[a-zA-Z]+$")]],
        mobilenumber:["",[Validators.required , Validators.pattern("^[0-9]*$")]]
      }
    )
  }

  onSubmit(){
    this.data.createData(this.studentForm.value).subscribe(res=>{
      this.router.navigateByUrl("alldatas")
    })
  }
  cancel(){
    this.router.navigateByUrl("alldatas")
  }
}
