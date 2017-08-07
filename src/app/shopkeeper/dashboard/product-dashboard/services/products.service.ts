import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../../../shared/services/services-auth/auth.service';

import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

	user : firebase.User;

  constructor(public db : AngularFireDatabase, private auth : AuthService) {
  	this.user = firebase.auth().currentUser;  	
  }

  getUser() {
  	return this.db.object(`users/${this.user.uid}`);
  }

  getProductsFrom(thisStore, query?) {
		return this.db.list(`/products-stores/${thisStore}`, {
      query : query || {
        orderByChild: 'name'
      }
		});
  }

  addProduct(product) {
    product.stores.forEach((store) => {

      let newProduct = {
        name : product.name,
        description : product.description,
        price : product.price,
        store : store
      };

      let key = firebase.database().ref(`/products`).push(newProduct).key;

      firebase.database().ref(`/products-stores/${store}/${key}`).set(newProduct);      
    });  	
  }

  updateProduct(product) {
    let updatedProduct = {
      name : product.name,
      description : product.description,
      price : product.price
    };

    firebase.database().ref(`products/${product.productId}`).update(updatedProduct);

    this.db.object(`products/${product.productId}`).subscribe((databaseProduct) => {      
      firebase.database().ref(`/products-stores/${databaseProduct.store}/${product.productId}`).update(updatedProduct);
    });
  }

}
