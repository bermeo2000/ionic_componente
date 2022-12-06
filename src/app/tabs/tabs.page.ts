import { Component, OnInit } from '@angular/core';

const mapboxgl = require('mapbox-gl');

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mapa()
  }

  mapa() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVybWVvMjAwMCIsImEiOiJjbGJiN2xlZWEwZnY5M25vNXlkOGM5bjVrIn0.aJ3rLKDuIMclOQSs2jXLcg';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.on('load', function () {
      map.resize();
    });

    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(assets/localizacion.png)';
    el.style.width = '64px';
    el.style.height = '64px';


    const popup = new mapboxgl.Popup({ offset: 25 }).setText(

      '10'
    );

    const marker = new mapboxgl.Marker(el)
      .setLngLat([-74.5, 40])
      .setPopup(popup)
      .addTo(map);

    


  }



}