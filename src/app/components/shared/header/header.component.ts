import { ControllerService } from './../../../services/controller.service';
import { Component, OnInit } from '@angular/core';
import { ImageList } from 'src/app/constants/helpers/images-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo!: string
  healthFamily!: string
  tick!: string

  listChoice = [
    {
      title: 'Comprehensive Insurance',
      explanation: 'Dynamically repurpose e-business users rather than granular products.'
    },
    {
      title: 'Support is just a call away',
      explanation: 'Rapidiously customize value-added platforms compliant action items.'
    },
    {
      title: 'Say goodbye to paperwork.',
      explanation: 'Globally deliver economically sound communities relationships.'
    }
  ]

  constructor(public ctrl: ControllerService) { }

  ngOnInit(): void {
    this.logo = this.ctrl.image(ImageList.logo)
    this.healthFamily = this.ctrl.image(ImageList.healthFamily)
    this.tick = this.ctrl.image(ImageList.tick)
  }

}
