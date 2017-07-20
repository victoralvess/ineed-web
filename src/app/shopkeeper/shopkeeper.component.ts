import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/services/services-auth/auth.service';

@Component({
  selector: 'app-shopkeeper',
  templateUrl: './shopkeeper.component.html',
  styleUrls: ['./shopkeeper.component.css']
})
export class ShopkeeperComponent implements OnInit {
  
  user: any;
  
  constructor(private afAuth: AngularFireAuth, private service: AuthService, private router: Router) {
    this.user = afAuth.auth.currentUser;
  }

  ngOnInit() {
  }

  onClickSair() {
    this.service.logout();
    this.router.navigate(['/home']);
  }

}
