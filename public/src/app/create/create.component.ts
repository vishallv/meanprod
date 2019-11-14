import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createData: any;
  errorMessage = [];

  constructor(private _httpService: HttpService,private _route: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.createData = {
      title: "",
      price: "",
      image: ""
    };
    // console.log(this.route.snapshot , "hello")

  }

  createNewProduct() {

    let observable = this._httpService.createProduct(this.createData);
    observable.subscribe(data => {
      this.errorMessage = [];
      console.log(data);
      if ( data['errors'] ) {
        console.log('came to error');
        for ( let key in data['errors']) {
          this.errorMessage.push(data['errors'][key]['message']);
        } 
      }
      else{
      this.createData = {
        title: "",
        price: "",
        image: ""
      };
      this._route.navigate(['/products']);
    }
    })
  

  }
  cancelCreate(){
    this._route.navigate(['/products']);
  }

}
