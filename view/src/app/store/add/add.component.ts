import { StoreService } from './../../service/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form: any = {
    storename: null,
    category: null,
    latitude: null,
    longitude: null
  };
  errorMessage = '';
  isAddStoreFailed = false;
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    const { storename, category, latitude, longitude } = this.form;

    // this.()
    this.storeService.add(storename, category, latitude, longitude).subscribe(
      data => {
        this.isAddStoreFailed = false;
      },
      err => {
        this.isAddStoreFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }
}
