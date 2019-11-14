import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts : any;
  myboolean = false;
  constructor(private _httpSerive : HttpService, private route:ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    this.getAllProducts()
    // console.log(this.route.snapshot['_routerState'].url)
    // if(this.route.snapshot['_routerState'].url == "/products/new"){
    //   this.myboolean = true
    // }
  }

  getAllProducts(){

    let observable = this._httpSerive.getProducts();
    observable.subscribe(data => {
      this.allProducts = data;
    });
  }
  editProduct(id: string){
    
    this._router.navigate([`/edit/${id}`]);
    
  }
  deleteProduct(id: string) {
    let observable = this._httpSerive.deleteProduct(id);
    observable.subscribe(data => {
      this.getAllProducts();
    });
  }

}
