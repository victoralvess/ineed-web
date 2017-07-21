import { Component, OnInit } from '@angular/core';
import { ProductDashboardComponent } from '../product-dashboard.component';
import { ProductsService } from '../services/products.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  stores : any[];
	user : firebase.User;

	public newProductForm = this.fb.group({
	    name: ["name", Validators.required],
	    description: ["description", Validators.required],
	    price: ["price", Validators.required],
	    stores: ["stores"]
	  });

  constructor(public fb: FormBuilder, private productsService : ProductsService) { 
    productsService.getUser().subscribe((user) => {
      this.stores = user.worksAt;
    });
  }

  ngOnInit() {
  }

  /*addProduct() {
  	this.productsService.addProduct();
  }*/

  addNewProduct(event) {
    console.log(event);
    console.log(this.newProductForm.value);
    console.log(this.newProductForm.controls['stores'].value);
  }

}
  