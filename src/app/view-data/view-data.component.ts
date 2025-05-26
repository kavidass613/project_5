import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-data',
  imports: [CommonModule],
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.css'
})
export class ViewDataComponent implements OnInit {

  studentData:any;

  yourId!: number; 

  
  constructor(private data:CrudService , private activated:ActivatedRoute , private router:Router){

  }

  ngOnInit(): void {
    this.yourId = this.activated.snapshot.params["id"]
    this.data.getOne(this.yourId).subscribe(res=>{
      this.studentData=res
    })
  }
  cancel(){
    this.router.navigateByUrl("alldatas")
  }
}
