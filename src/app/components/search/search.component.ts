import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtista(termino).subscribe((data :any)=>{
      console.log(data.artists.items);
    });
  }
}
