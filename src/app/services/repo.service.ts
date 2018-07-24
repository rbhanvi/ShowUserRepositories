import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators/catchError';
import { throwError } from 'rxjs/operators/throwError';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private username:string;
  private clientid = 'a76b0076c2942aa5a924';
  private clientsecret = 'aa16161bc385f9800c0de0b200385bc465f922f6';
  constructor(private http:Http) { 
    console.log("Service is now ready!!");
    this.username = 'rbhanvi';
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map((res: any) => res.json())
    ,catchError(this.errorHandler)
    );  
  }

  errorHandler(error: HttpErrorResponse)
  {
      
      return Observable.throwError("User not Found!!!")
  }

  updateProfile(username:string){
    this.username = username;
  }
}
