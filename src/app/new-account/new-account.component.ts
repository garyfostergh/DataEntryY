import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'aap-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  name: any;
  constructor() {

    this.name = { first: "joe", last: "blow" };
  }

  ngOnInit() {
  }

}
