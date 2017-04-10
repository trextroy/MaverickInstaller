import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <nav>
        <a routerLink="/login" routerLinkActive="active">Login</a>
        <a routerLink="/success" routerLinkActive="active">Success</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }
}
