import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { add, edit, view } from './interfaces/datatypes'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 url:string="http://localhost:3000/data"

  constructor(private http:HttpClient) { }

  add(data:add)
  {
    return this.http.post(this.url,data)
  }
  view():Observable<view[]>
  {
    return this.http.get<view[]>(this.url)
  }
  selectdata(id:number):Observable<edit>
  {
    return this.http.get<edit>(this.url+"/"+id)
  }
  update(id:number,data:edit)
  {
    return this.http.put(this.url+"/"+id,data)
  }
  remove(id:number):Observable<view[]>
  {
    return this.http.delete<view[]>(this.url+"/"+id)
  }
}
