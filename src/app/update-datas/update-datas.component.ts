import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-datas',
  imports: [ReactiveFormsModule],
  templateUrl: './update-datas.component.html',
  styleUrl: './update-datas.component.css'
})
export class UpdateDatasComponent implements OnInit {

  studentForm!: FormGroup;

  yourId!: number;

  studentData:any;

  constructor(private data:CrudService , private fb:FormBuilder , private router:Router , private activated:ActivatedRoute){

    this.studentForm=this.fb.group(
      {
        id:["",[Validators.required,Validators.pattern("^[0-9]*$")]],
        name:["",[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
        mobilenumber:["",[Validators.required,Validators.pattern("^[0-9]*$")]]
      }
    )
  }

  ngOnInit(): void {
    this.yourId = this.activated.snapshot.params["id"]
    this.data.getOne(this.yourId).subscribe(res=>{
      this.studentData=res

      this.studentForm.setValue(
        {
          id:this.studentData.id,
          name:this.studentData.name,
          mobilenumber:this.studentData.mobilenumber
        }
      )
    })
  }

  onSubmit(){
    this.data.update(this.yourId,this.studentForm.value).subscribe(res=>{
      this.router.navigateByUrl("alldatas")
    })
  }
  cancel(){
    this.router.navigateByUrl("alldatas")
  }
}
