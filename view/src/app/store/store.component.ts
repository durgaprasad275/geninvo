import { TokenStorageService } from './../service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  user : any;


  constructor(private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
      this.user = this.tokenStorageService.getUser()["username"];
  }

}
