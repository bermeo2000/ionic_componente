import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refreshers',
  templateUrl: './refreshers.page.html',
  styleUrls: ['./refreshers.page.scss'],
})
export class RefreshersPage implements OnInit {


  items:any[] = [];

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event:any){
    console.log(event);

    setTimeout(() => {
      this.items = Array(17);
      event.target.complete();
    }, 1500);

  }

}