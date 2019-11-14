import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editData: any;
  id :string;
  errorMessage =[];

  constructor(private _httpService : HttpService, private _route: ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    this.editData = {
      title: "",
      price: "",
      image: ""
    };
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];

      let observable = this._httpService.getOne(this.id);

      observable.subscribe(data => {
        this.editData = {
          title:data['title'],
          price: data['price'],
          image: data['image']
        };
      })

  });

  }
  updateProduct(){

    let observable = this._httpService.updateproduct(this.id,this.editData)
    observable.subscribe(data => {
      this.errorMessage = [];
      
      if ( data['errors'] ) {
        console.log('came to error');
        for ( let key in data['errors']) {
          this.errorMessage.push(data['errors'][key]['message']);
        } 
      }
      else{
      this.editData = {
        title: "",
        price: "",
        image: ""
      };
      this._router.navigate(['/products']);
    }
    });
  }

  cancelUpdate(){
    this._router.navigate(['/products']);
  }

}
