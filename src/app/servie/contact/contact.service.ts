import { Injectable } from '@angular/core';
import { Contact } from '../../common/contact'

const contacts:Contact[] = [
  {
    id:1,
    name:'chen'
  },
  {
    id:2,
    name:'haha'
  }
]

@Injectable()
export class ContactService {

  constructor() { }

  getContacts():Promise<Contact[]>{
    return new Promise((resolve,rejcet)=>{
        resolve(contacts)
    })
  }
}
