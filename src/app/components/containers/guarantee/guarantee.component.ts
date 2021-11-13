import { ControllerService } from './../../../services/controller.service';
import { Component, OnInit } from '@angular/core';
import { ImageList } from 'src/app/constants/helpers/images-list';

@Component({
  selector: 'app-guarantee',
  templateUrl: './guarantee.component.html',
  styleUrls: ['./guarantee.component.scss']
})
export class GuaranteeComponent implements OnInit {

  shieldYellow!: string

  constructor(public ctrl: ControllerService) { }

  ngOnInit(): void {
    this.shieldYellow = this.ctrl.image(ImageList.shieldYellow)
  }

}
