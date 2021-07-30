import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAccount } from './user-account.model';
import { LoginService } from './login.service';
//import { UserDetails } from './user-details.model';


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {


  constructor(private http: HttpClient, private log: LoginService) { }

  readonly baseUrl = 'http://localhost:5000/api/User';
  formData: UserAccount = new UserAccount();
  //currentUser = this.log.getUser();
  //password = this.log.getPassword();
  
  results: UserAccount[];
  user: UserAccount = new UserAccount(); 

  refreshResultList()
  {
    this.http.get(this.baseUrl).toPromise()
    .then(res=>this.results = res as UserAccount[])
    //console.log(res);
  }

  async refreshUserList()
  {
    var currentUser = this.log.getUsername();
    var password = this.log.getPassword();
    console.log(currentUser, password);
    console.log("Hamba2");
    const params = new HttpParams().set("password", password);
    const res = await this.http.get(this.baseUrl + "/" + currentUser, { params }).toPromise().
    then(res=>{
      this.user = res as UserAccount;
      console.log("Hamba:"+this.user.mail);
     });
  }




}
