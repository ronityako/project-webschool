import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DALService {

  constructor(private http: HttpClient) {}

  getFromDB(url:string) : any
  { 
    return this.http.get<any[]>(url);
  }

  postNewToDB(url:string, rec:any)
  {
    return this.http.post(url, rec);
  }

  updateDB(url:string, rec:any){
    return this.http.put(url, rec);
  }

  deleteFromDB(url:string){
  
    return this.http.delete(url);
  }
}