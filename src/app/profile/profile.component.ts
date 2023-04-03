import { Component, OnInit } from '@angular/core';
import { myData } from 'src/models/myData';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor( private api:ApiService) { }
  allData:any
  users:myData []=[] as myData[];
  ngOnInit(): void {
    this.api. getAllData().subscribe((data:myData)=>{
      this.allData=data.users
    })
  }


}
