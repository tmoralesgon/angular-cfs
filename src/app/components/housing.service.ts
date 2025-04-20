import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  /*readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList:HousingLocation [] = [
    {
      id: 0,
      name: 'Test home1',
      city: 'Chicago',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 1,
      name: 'Test home2',
      city: 'New York',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    },
    {
      id: 2,
      name: 'Test home3',
      city: 'California',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false
    }
  ];
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id:number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }*/

 //Con peticiones HTTP
 url = 'http://localhost:3000/locations';
 
 async getAllHousingLocations(): Promise<HousingLocation[]>{
  const data = await fetch(this.url)
  return (await data.json());
 }
 
/*async getAllHousingLocations() {
  const data = await fetch(this.url)
  return (await data.json());
 }*/

 async getHousingLocationById(id:number): Promise<HousingLocation | undefined>{
  const data = await fetch(`${this.url}/${id}`)
  return (await data.json()) ?? {};
 }

  submitApplication(firstName:string, lastName:string, email:string){
    console.log(`FirstName: ${firstName} - LastName: ${lastName} - Email: ${email}`);
  }
}
