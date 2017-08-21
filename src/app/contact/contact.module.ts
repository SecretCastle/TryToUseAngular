import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AwesomePipe } from '../service/pipe/awesome.pipe'
import { ContactComponent } from './contact.component'
import { ContactService } from '../servie/contact/contact.service'
import { ContactRoutingModule} from './contact-routing.module'

@NgModule({
    declarations: [
        ContactComponent,
        AwesomePipe
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ContactRoutingModule
    ],
    providers: [
        ContactService
    ],
})
export class ContactModule {}