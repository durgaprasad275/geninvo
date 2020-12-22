import { Router } from '@angular/router';
import { StoreService } from './../../service/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  storeList : any;
  isStoreAvailable = false;
  errorMessage:string;
  constructor(private storeService: StoreService, private route:Router) { }

  ngOnInit(): void {
    this.storeService.getStore().subscribe(
      data => {
        this.storeList = data;
        this.isStoreAvailable = true;
      },
      err => {
        this.isStoreAvailable = false;
      }
    );
  }

  delete=(storeId : number)=>{
    console.log("deleted");
    this.storeService.deleteStore(""+storeId).subscribe();
    this.route.navigate(['/store/search'])

  }
}
