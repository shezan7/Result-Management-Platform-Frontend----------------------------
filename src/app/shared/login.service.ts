import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from './login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }  

  readonly baseUrl = 'http://localhost:5000/api/Login';
  formData1: Login = new Login();
  rol : any;
  pass = '';
  inputRoll = "";
  

  logInUser()
  {
    if(this.inputRoll=="admin"){
      this.formData1.roll = 101010;
    }
    else{
      this.formData1.roll = +this.inputRoll;
    }
    this.rol = this.formData1.roll;
    this.pass = this.formData1.password;
    var loggedIn = {name:this.rol.toString(), password:this.pass};
    //console.log(this.rol);
    const params = new HttpParams().set("password", this.formData1.password);
    return this.http.get(this.baseUrl + "/" + this.formData1.roll, {params}).pipe(map(user => {
      localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    }));
  }

  //getUser()
  //{
    //console.log(this.rol);
    //return this.rol;   
  //}

  getUsername() {
    var user = localStorage.getItem('loggedIn');
    //console.log(user?.length);
    if(user)
    {
      //var name = JSON.parse(user).getItem("name");
      var x = JSON.parse(user);

      console.log(x.name);
      this.rol = parseInt(x.name);
      this.pass = x.password;

      return this.rol;
    } 
    return 0;
  }

  getPassword()
  {
    console.log(this.pass);
    return this.pass;
  }

  logout()
  {
    localStorage.removeItem('loggedIn');
  }


}
