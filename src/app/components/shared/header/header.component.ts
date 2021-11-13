import { ControllerService } from './../../../services/controller.service';
import { Component, OnInit } from '@angular/core';
import { ImageList } from 'src/app/constants/helpers/images-list';
import { Endpoints } from 'src/app/constants/classes/endpoints';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  banner!: string

  constructor(public ctrl: ControllerService) { }

  ngOnInit(): void {
    this.banner = Endpoints.SECURE + this.ctrl.firebase.loadImage(ImageList.banner)
  }

}
