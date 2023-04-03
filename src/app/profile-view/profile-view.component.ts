import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { myData } from 'src/models/myData';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit{

  constructor( private api:ApiService) {}
  users:myData []=[] as myData[];
  user:any={}
  toggle=true
  ngOnInit(): void {
    this.api. getAllData().subscribe((data:myData)=>{
      this.users=data.users
      this.refresh()
    })
  }
 //to get random user
  getRandomUser(){
    var index= Math.floor(Math.random()* this.users.length)+1
    this.user=this.users[index]
  }
// to refresh the page
  refresh(){
    this.getRandomUser()
    this.toggle=!this.toggle
  }

}
