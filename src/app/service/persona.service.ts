import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'https://backendtest900.herokuapp.com/personas/';
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL + `traer/perfil`);
  }

  /*
  public detail(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL + `detail/${id}`);
  }
  */

  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}`, persona);
  }
}
