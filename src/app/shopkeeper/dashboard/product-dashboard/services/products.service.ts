import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../../../shared/services/services-auth/auth.service';

import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

	user : firebase.User;

  constructor(private db : AngularFireDatabase, private auth : AuthService) {
  	this.user = firebase.auth().currentUser;  	
  }

  getUser() {
  	return this.db.object(`users/${this.user.uid}`);
  }

  getProductsFrom(thisStore) {
		return this.db.list(`/products/${thisStore}`, {

		});
  }

  addProduct(product) {
    product.stores.forEach((store) => {
      firebase.database().ref(`/products/${store}`)
      .push({
        name : product.name,
        description : product.description,
        price : product.price
      });
    });  	
  }

}
