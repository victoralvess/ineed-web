import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  constructor() { 
		/*firebase.database().ref(`/products-stores`).limitToLast(1).on('child_removed', (snapshot) => {
      this.growlMessages = [{severity: 'error', summary: 'Excluído', detail: 'O produto foi excluído com êxito'}];  
      setTimeout(() => {
        this.growlMessages = [];
      }, 5000)
    });*/
  }

  ngOnInit() {
  }

}
