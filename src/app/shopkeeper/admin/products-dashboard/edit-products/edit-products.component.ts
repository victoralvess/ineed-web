import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  whitespaceError : boolean = false;
  productsForm : FormGroup;
	user : firebase.User;
	productId : any;
  categories: SelectItem[];

  constructor(private fb: FormBuilder, private productsService : ProductsService, private activatedRoute: ActivatedRoute) { 

  	this.productsForm = new FormGroup({
      name : new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])),
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(200)])),
      price: new FormControl('', Validators.required),
      selectedCategories: new FormControl([], Validators.required)
    });

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

    this.activatedRoute.params.subscribe((params: Params) => {

      this.productId = params['productId'];

  		this.productsService.db.object(`products/${this.productId}`).subscribe((foundProduct) => {
  			this.productsForm = fb.group({
		  		name : [foundProduct.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
		  		description: [foundProduct.description, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(200)])],
		  		price: [foundProduct.price, Validators.required],
          selectedCategories: new FormControl(this.productsService.getCategoriesFrom(foundProduct), Validators.required)
		    });
  		});

      productsService.getAllCategories().subscribe((category) => {
        let auxArray = [];
        category.forEach(cat => {
          auxArray.push({ label : cat.value, value : cat.$key });
        });
        this.categories = auxArray;
      });

    });
  }

  ngOnInit() {}

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
