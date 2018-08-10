import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
   }
  getPokemon() {
    const Lucario = this._http.get('https://pokeapi.co/api/v2/pokemon/448/');

    Lucario.subscribe(data => console.log(`${data.name} has the abilities ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}, and ${data.abilities[2].ability.name}`));
    const Justified = this._http.get('https://pokeapi.co/api/v2/ability/154/');

    Justified.subscribe (data => {
      this.pokemon = data.pokemon;
      this.pokemon.forEach(p => console.log(`${p.pokemon.name} also has Justified!`))
    });
}
}
