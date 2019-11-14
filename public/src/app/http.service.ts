import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createProduct(data:any){

    return this._http.post('/api/products',data);
  }

  getProducts(){
    return this._http.get('/api/products');
  }

  deleteProduct(id:string){
    return this._http.delete(`/api/products/${id}`);
  }

  getOne(id: string){
    return this._http.get(`/api/products/${id}`);
  }

  updateproduct(id:string,data:any){
    return this._http.put(`/api/products/${id}`,data);
  }

}
