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
  'Authorization':'Bearer BQArea4Rr6tJdVF2EDigqlot3CXY6YXWlKTSqtFGSvYZ7mHYdsZuwVhDUe6zP2LOuuq9E6m0rI3bzpr8wtg'
    });

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers});
    
  }

  getArtista(termino:string){
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQArea4Rr6tJdVF2EDigqlot3CXY6YXWlKTSqtFGSvYZ7mHYdsZuwVhDUe6zP2LOuuq9E6m0rI3bzpr8wtg'
        });
    
        return this.httpClient.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=20`,{headers});
        
      
  }
}
