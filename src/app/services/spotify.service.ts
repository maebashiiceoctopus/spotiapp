import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient:HttpClient) {
    console.log('Hola');
   }

  
  getNewReleases(){
    const headers=new HttpHeaders({
  'Authorization':'Bearer BQDwI_YZvcNwcUhFXgoTCBu1bZhU9mpu_gmX6jK18gDLZ9zCAECnU48qwFm4OPi2jXKpcxXSPDbNHpeQQ3s'
    });

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers});
    
  }
}
