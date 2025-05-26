import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User1 } from './user1';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  student_http="http://localhost:2000/student"

  constructor(private http:HttpClient) {}

  allDatas(){
    return this.http.get<User1[]>(this.student_http)
  }
  
  createData(data:any){
    return this.http.post(this.student_http,data)
  }

  getOne(id:number){
    return this.http.get(`${this.student_http}/${id}`)
  }
  update(id:number,data:any){
    return this.http.put(`${this.student_http}/${id}`,data)
  }

  deleteData(id:number){
    return this.http.delete(`${this.student_http}/${id}`)
  }
}
