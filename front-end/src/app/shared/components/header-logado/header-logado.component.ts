import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/_services';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-header-logado',
  templateUrl: './header-logado.component.html',
  styleUrls: ['./header-logado.component.scss']
})
export class HeaderLogadoComponent  {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['']);
  }
}
