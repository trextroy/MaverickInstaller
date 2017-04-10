
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class LoginService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  
  private value:string;
   
  getLoginStatus(id:string,pass:string) : Boolean {
    if(id == pass){
      return value = "sucess";
    }else{
      return value = "fail";
    }
    return true;
    //return new Login(value);
  }
}

export class Login {
  constructor(public status: string) { }
}
