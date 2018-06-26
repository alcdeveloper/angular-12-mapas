import { Injectable } from '@angular/core';
import { Marcador } from '../interface/marcador.interface';

@Injectable()
export class MapasService {

    marcadores:Marcador[]=[];

  constructor() {
  		let nuevoMarcador:Marcador ={
				  lat: 37.356513484169476,
				  lng: -5.981755256652832,
				  titulo:"Estadio Benito Villamarin",
				  desc:"El Estadio Benito Villamarín se ubica en la avenida de la Palmera, en el barrio de Heliópolis, en la ciudad de Sevilla, Andalucía, España. Pertenece al Real Betis Balompié. Se trata del estadio más grande de Andalucía y el cuarto de España.",
				  draggable:true
  		}

  		this.marcadores.push(nuevoMarcador);

   }

   insertarMarcador(marcador:Marcador){
   	this.marcadores.push(marcador);
   	this.guardarMarcadores();
   }

   borrarMarcador(idx:number){
   	this.marcadores.splice(idx,1);
   	this.guardarMarcadores();
   }


   guardarMarcadores(){
   	localStorage.setItem('marcadores',JSON.stringify(this.marcadores))
   }

   cargarNarcadores(){
   	if(localStorage.getItem('marcadores')){
   		this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
   	}else{
   		this.marcadores=[];
   	}
   }

}
