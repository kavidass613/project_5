import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { User1 } from '../user1';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-datas',
  imports: [CommonModule],
  templateUrl: './all-datas.component.html',
  styleUrl: './all-datas.component.css'
})
export class AllDatasComponent implements OnInit {

  allDatas!: any;

  constructor(private data:CrudService , private router:Router){}

  ngOnInit(): void {
    this.getAllDatas()
  }

  getAllDatas(){
    return this.data.allDatas().subscribe(res=>{
      this.allDatas=res
    })
  }

  addDetails(){
    this.router.navigateByUrl("create")
  }

  update(id:number){
    this.router.navigate(["update",id])
  }
  
  viewData(id:number){
    this.router.navigate(["view",id])
  }

  deleteData(id:number){
    this.data.deleteData(id).subscribe(res=>{
      this.getAllDatas()
    })
  }
}
