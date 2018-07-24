import { Component, OnInit } from '@angular/core';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'app-userrepos',
  templateUrl: './userrepos.component.html',
  styleUrls: ['./userrepos.component.css']
})
export class UserreposComponent implements OnInit {
  repos: any[];
  username:string;
  public errorMsg;

  constructor(private reposervice: RepoService) { 

  }

  findProfile(){
    if(this.username!=""){
    this.reposervice.updateProfile(this.username);
    this.reposervice.getProfileRepos().subscribe(repos => {
      this.errorMsg = "";
      this.repos = repos;
    }, error => { this.errorMsg = error
      this.repos = "";
    }
    )}
    else{
    this.repos="";
    }
  }

  ngOnInit() {
  }

}
