import { Component, OnInit } from '@angular/core';
import { ProductDashboardComponent } from '../product-dashboard.component';
import { ProductsService } from '../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  whitespaceError : boolean = false;
  productsForm : FormGroup;
	user : firebase.User;
	productId : any;

  constructor(private fb: FormBuilder, private productsService : ProductsService, private activatedRoute: ActivatedRoute) { 

  	this.productsForm = fb.group({
  		name : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
  		description: [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(200)])],
  		price: [null, Validators.required]
    });

    this.activatedRoute.params.subscribe((params: Params) => {

      this.productId = params['productId'];

  		this.productsService.db.object(`products/${this.productId}`).subscribe((foundProduct) => {
  			this.productsForm = fb.group({
		  		name : [foundProduct.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
		  		description: [foundProduct.description, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(200)])],
		  		price: [foundProduct.price, Validators.required]
		    });
  		})

    });
  }

  ngOnInit() {

  	this.productsForm.valueChanges
	    .map((value) => {
	    	  value.name = value.name.trim();
	        value.description = value.description.trim();
	        if(value.name.length < 3 || value.description.length < 20) {
	        	this.whitespaceError = true;
	        } else {
	        	this.whitespaceError = false;
	        }
	        return value;
	    });

  }

  updateProduct(data) {
  	
    if(data.name.trim().length < 3 || data.description.trim().length < 20) {
    	this.whitespaceError = true;
    	return;
    } else {
    	this.whitespaceError = false;
    }

    data.productId = this.productId;

    this.productsService.updateProduct(data);
  }
 
}
