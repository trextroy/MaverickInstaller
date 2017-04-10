import { Component, OnInit } from '@angular/core'

import { Login, LoginService } from './login.service'
 
@Component({
  selector: 'login-selector',
  template: `
    <h1 class="title">Login Component</h1>
    Username: <input type="text" name="fname"><br>
    Password: <input type="text" name="lname"><br>
    <input type="submit" value="Submit">
  `
})

export class LoginComponent {

}