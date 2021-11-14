import { ControllerService } from './../../../services/controller.service';
import { Component, OnInit } from '@angular/core';
import { ImageList } from 'src/app/constants/helpers/images-list';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  shieldBlue!: string

  constructor(public ctrl: ControllerService) { }

  ngOnInit(): void {
    this.shieldBlue = this.ctrl.image(ImageList.shieldBlue)
  }

}
