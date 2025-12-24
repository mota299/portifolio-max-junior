import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: 'contato@maxsenna500@gmail.com',
      name: 'Max junior',
      whatsApp: 'https://api.whatsapp.com/send?phone=5522998712010&text=Ol%C3%A1,%20estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%A3o',
      linkedIn: 'www.linkedin.com/in/max-junior'
    }

   return profile;

  }
  
}
