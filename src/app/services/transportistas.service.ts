import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transportistas } from '../api/models';
import { TransportistasWithoutID } from '../api/models/transportistas';

const ENDPOINT = 'transportistas';

@Injectable({
  providedIn: 'root'
})
export class TransportistasService {

  constructor(private http: HttpClient
    ) { }
   //GET
   getAllTransportistas(){
      return this.http.get<Transportistas[]>(`https://lb4flotavehicular.herokuapp.com/${ENDPOINT}`)
    }
  
    //POST
    postTransportistas(transportistas:TransportistasWithoutID){
      return this.http.post(`https://lb4flotavehicular.herokuapp.com/${ENDPOINT}`,transportistas);
    }
  
    //PUT
    putTransportistas(id:string,transportistas:TransportistasWithoutID){
      return this.http.put(`https://lb4flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,transportistas)
    }
  
    //PATCH
    patchTransportistas(id:string,transportistas:TransportistasWithoutID){
      return this.http.patch(`https://lb4flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,transportistas)
    }
  
    //DELETE
  deleteTransportistas(id:string){
      return this.http.delete(`https://lb4flotavehicular.herokuapp.com/${ENDPOINT}/${id}`)
    }
  }
  

  