import { ImageList } from 'src/app/constants/helpers/images-list';
import { ControllerService } from './../../services/controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banner!: string
  opinionImage!: string
  pricingBackground!: string
  familyIllustration!: string

  constructor(public ctrl: ControllerService) { }

  ngOnInit(): void {
    this.banner = this.ctrl.image(ImageList.banner)
    this.opinionImage = this.ctrl.image(ImageList.opinion)
    this.pricingBackground = this.ctrl.image(ImageList.backgroundPricing)
    this.familyIllustration = this.ctrl.image(ImageList.familyIllustration)
  }

}
