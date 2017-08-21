import { Component, OnInit } from '@angular/core';
import { ContactService } from '../servie/contact/contact.service'
import { Contact } from '../common/contact'
@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:  Contact;
  contacts: Contact[];
  msg = 'Loading contacts ...';
  userName = '';

  constructor(
      private contactService : ContactService
  ) {


   }

  ngOnInit() {
    this.getContactList()
  }

  getContactList(){
    this.contactService.getContacts().then(res=>{
        this.msg = ''
        console.log(res);
        if(res){
            this.contacts = res
            this.contact = res[0]
        }
        
    })
  }

}
