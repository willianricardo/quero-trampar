import {Injectable} from '@angular/core';

declare const google;

@Injectable()
export class MapService {
  constructor() {
  }

  loadMap(latLng, mapElement) {

    if (latLng.lat && latLng.lng) {
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      const map = new google.maps.Map(mapElement, mapOptions);

      // const marker = new google.maps.Marker({
      //   position: latLng,
      //   map: map,
      //   title: ''
      // });

      map.setCenter(latLng);
    }

  }
}
