import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../../../shared/services/services-auth/auth.service';

import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

	stores : any[];
	currentStore : any;
	products : FirebaseListObservable<any[]>;
	user : firebase.User;

  constructor(private db : AngularFireDatabase, private auth : AuthService) { 

  	this.user = firebase.auth().currentUser;
  	db.object(`/users/${this.user.uid}`)
  	.subscribe((user) => {
  		this.stores = user.worksAt;
  		this.getProductsFrom(this.stores[0]);
  	});

  }

  ngOnInit() {
  }

  getProductsFrom(thisStore) {
		this.products = this.db.list(`/products/${thisStore}`, {

		});
  }

  onChange(value) {
  	this.currentStore = value;
  	this.getProductsFrom(this.currentStore);
  }

}
