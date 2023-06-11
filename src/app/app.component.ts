import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atria-crm';
  login: boolean = false;
  constructor(
    private router: Router,
  ) {
    const isLogin = JSON.parse(localStorage.getItem('isLogin')!);
    if (!isLogin) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          if (val.url.includes("/login") || val.url.includes("/register")) {
            this.login = true;
          } else {
            this.login = false;
          }
        }
      });
    }
  }
}
