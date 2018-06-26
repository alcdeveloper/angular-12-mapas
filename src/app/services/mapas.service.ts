import { Injectable } from '@angular/core';
import { Marcador } from '../interface/marcador.interface';

@Injectable()
export class MapasService {

    marcadores:Marcador[]=[];

  constructor() {
  		let nuevoMarcador:Marcador ={
				  lat: 77.356513484169476,
				  lng: -9.981755256652832,
				  titulo:"Una ubicacioón  cualquiera",
				  desc:"Una ubicacioón  cualquiera",
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
