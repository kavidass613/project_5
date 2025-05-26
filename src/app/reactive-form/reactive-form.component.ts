import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentsForm!: FormGroup;

  constructor(private fb:FormBuilder){
    this.studentsForm = this.fb.group(
      {
        id:["",[Validators.required , Validators.pattern("^[0-9]*$")]],
        name:["",[Validators.required , Validators.pattern("[a-zA-Z]+$")]],
        mobilenumber:["",[Validators.required , Validators.pattern("^[0-9]*$")]],
        skills:this.fb.array([])
      }
    )
  }


  get skills():FormArray{
    return this.studentsForm.get("skills") as FormArray 
  }

  newSkill():FormGroup{
    return this.fb.group(
      {
        skill:""
      }
    )
  }

  addSkill(){
    return this.skills.controls.push(this.newSkill())
  }

  deleteData(i:number){
    this.skills.removeAt(i)
  }

  setVlues(){
    this.studentsForm.setValue(
      {
        id:"2",
        name:"meena",
        mobilenumber:"1234567890"
      }
    )
  }

  pathchValues(){
    this.studentsForm.patchValue(
      {
        id:"3",
        name:"ponneelan"
      }
    )
  }

  resetValues(){
    this.studentsForm.reset()
  }

  onSubmit(){
    console.log(this.studentsForm.value);
    
  }
}
