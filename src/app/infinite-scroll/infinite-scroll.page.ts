
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  list:any[] = Array(40);

  constructor() { }

  ngOnInit() {
  }

  onIonInfinite(event:any){
    console.log("Cargando siguientes...");

    if(this.list.length > 80){
      event.target.complete();
      this.infiniteScroll.disabled=true;
      return;
    }

    setTimeout(() =>{
      const newList = Array(40);
      this.list.push(...newList);

      event.target.complete();

    }, 500);
  }
}
