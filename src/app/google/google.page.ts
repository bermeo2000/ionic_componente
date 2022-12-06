import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { google} from "google-maps";
declare var google :google;

@Component({
  selector: 'app-google',
  templateUrl: './google.page.html',
  styleUrls: ['./google.page.scss'],
})
export class GooglePage implements OnInit {

 

@ViewChild('map')mapElement !: ElementRef;
map: any;
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

    let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  
}

}