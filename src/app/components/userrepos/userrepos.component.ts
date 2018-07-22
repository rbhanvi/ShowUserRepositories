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

  constructor(private reposervice: RepoService) { 

  }

  findProfile(){
    this.reposervice.updateProfile(this.username);
    this.reposervice.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })    
  }

  ngOnInit() {
  }

}
