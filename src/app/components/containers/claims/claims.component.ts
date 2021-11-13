import { ControllerService } from './../../../services/controller.service';
import { Component, OnInit } from '@angular/core';
import { ImageList } from 'src/app/constants/helpers/images-list';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  afterBlue!: string
  afterPink!: string

  constructor(public ctrl: ControllerService) { }

  ngOnInit(): void {
    this.afterBlue = this.ctrl.image(ImageList.afterBlue)
    this.afterPink = this.ctrl.image(ImageList.afterPink)
  }

}
