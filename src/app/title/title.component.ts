import { Component, OnInit , Input } from '@angular/core';
import { UserService } from '../servie/user/user.service'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  title = "这是一个title公共组件"
  @Input() subTitle = ''
  user = ''


  constructor(
    private userService: UserService

  ) { }

  ngOnInit() {
    this.user = this.userService.userName
  }

}
