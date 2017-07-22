import { Component, OnInit } from '@angular/core';
import { ProductDashboardComponent } from '../product-dashboard.component';
import { ProductsService } from '../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  stores = [];
  selectAtLeastOneStore : boolean = true; 
  whitespaceError : boolean = false;
  productsForm : FormGroup;
	user : firebase.User;

  constructor(public fb: FormBuilder, private productsService : ProductsService) { 

  	this.productsForm = fb.group({
  		name : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
  		description: [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(200)])],
  		price: [null, Validators.required]
    });

    productsService.getUser().subscribe((user) => {
    	console.log('worksat', user.worksAt);
	   	user.worksAt.forEach(store => {
	   		this.stores.push({id : store, checked : false});
	    });
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

  addNewProduct(data) {
    console.log(data);
    if(data.name.trim().length < 3 || data.description.trim().length < 20) {
    	this.whitespaceError = true;
    	console.log('hoje não, hoje não, hoje sim...');
    	return;
    } else {
    	this.whitespaceError = false;
    }

    for(let store of this.stores) {
    	this.selectAtLeastOneStore = store.checked;
    	if(store.checked) {
    		break;
    	}
    }

    if(!this.selectAtLeastOneStore) {
    	console.log('stores', 'no one');
    	return;
    }

    data.stores = this.stores
              		.filter(store => store.checked)
              		.map(store => store.id);

    console.log('checked', this.stores
              .filter(store => store.checked)
              .map(store => store.id));

    this.productsService.addProduct(data);
   // console.log(this.newProductForm.value);
  //  console.log(this.newProductForm.controls['stores'].value);
  }

}
  