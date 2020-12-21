import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form: any = {
    username: null,
    storename: null,
    category: null,
    latitude: null,
    longitude: null
  };
  errorMessage = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    const { username, storename, category, latitude, longitude } = this.form;
  }
}
