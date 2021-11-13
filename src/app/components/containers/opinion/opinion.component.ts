import { ControllerService } from './../../../services/controller.service';
import { Component, OnInit } from '@angular/core';
import { ImageList } from 'src/app/constants/helpers/images-list';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  quote!: string
  opinionImage!: string

  constructor(public ctrl: ControllerService) { }

  ngOnInit(): void {
    this.quote = this.ctrl.image(ImageList.quote)
    this.opinionImage = this.ctrl.image(ImageList.opinion)
  }

}
