import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';

import { Message } from 'primeng/primeng';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
 categories: SelectItem[];
  stores = [];
  selectAtLeastOneStore : boolean = true; 
  whitespaceError : boolean = false;
  productsForm : FormGroup;
  storesGroup : FormGroup;
	user : firebase.User;
  selectedCategories: any[];
 
  constructor(private fb: FormBuilder, private productsService : ProductsService) { 
  	this.productsForm = new FormGroup({
  		name : new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])),
  		description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(200)])),
  		price: new FormControl('', Validators.required),
      selectedCategories: new FormControl([], Validators.required)
    });

    this.storesGroup = new FormGroup({
      storesList: new FormControl('')
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

    productsService.getUser().subscribe((user) => {
    	console.log('worksat', user.worksAt);
	   	user.worksAt.forEach(store => {
	   		this.stores.push({id : store, checked : false});
	    });
 		});

    productsService.getAllCategories().subscribe((category) => {
      let auxArray = [];
      category.forEach(cat => {
        auxArray.push({ label : cat.value, value : cat.$key });
      });
      this.categories = auxArray;
     });
  }

  ngOnInit() {}  
growlMessages : Message[] = [];
  addNewProduct(data) {
    
    console.log(data);
    if(data.name.trim().length < 3 || data.description.trim().length < 20) {
    	this.whitespaceError = true;
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
    	return;
    }

    data.stores = this.stores
              		.filter(store => store.checked)
              		.map(store => store.id);

    this.productsService.addProduct(data);

    firebase.database().ref(`/products-stores`).limitToLast(1).on('child_added', (snapshot) => {
      this.growlMessages = [{severity: 'success', summary: 'Sucesso', detail: 'O produto foi cadastrado com êxito!'}];  
      setTimeout(() => {
        this.growlMessages = [];
      }, 5000)
    });
  }
files = [];
  imageFinishedUploading(file) {
  console.log(JSON.stringify(file));

  let byteString = atob(file.src.split(',')[1]);
  let mimeString = file.src.split(',')[0].split(':')[1].split(';')[0]

  let arrayBuffer = new ArrayBuffer(byteString.length);
  let uInt8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
      uInt8Array[i] = byteString.charCodeAt(i);
  }

  let blob = new Blob([arrayBuffer]);
  this.files.push(file.src);
  console.log(this.files);
  //firebase.storage().ref('teste.png').put(blob).then(function(snapshot) {
    //console.log('Uploaded a blob or file!');
  //});
  }

  imageRemoved(file) {
    // do some stuff with the removed file.
    this.files.splice(this.files.indexOf(file.src), 1);
    console.log(this.files);
  }

  uploadStateChange(state: boolean) {
    console.log(JSON.stringify(state));
  }
 
}
