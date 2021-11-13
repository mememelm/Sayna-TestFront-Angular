import { ControllerService } from './../../../services/controller.service';
import { Component, OnInit } from '@angular/core';
import { Insurance } from 'src/app/constants/models/insurance';
import { ImageList } from 'src/app/constants/helpers/images-list';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  listInsurance: Insurance[] = []

  constructor(public ctrl: ControllerService) { }

  ngOnInit(): void {
    this.listInsurance = [
      {
        title: 'Home Insurance',
        logo: this.ctrl.image(ImageList.insuranceHome)
      },
      {
        title: 'Car Insurance',
        logo: this.ctrl.image(ImageList.insuranceCar)
      },
      {
        title: 'Life Insurance',
        logo: this.ctrl.image(ImageList.insuranceLife)
      },
      {
        title: 'Business Insurance',
        logo: this.ctrl.image(ImageList.insuranceBusiness)
      },
      {
        title: 'Travel Insurance',
        logo: this.ctrl.image(ImageList.insuranceTravel)
      },
      {
        title: 'Other Insurance',
        logo: this.ctrl.image(ImageList.insuranceOther)
      },
    ]
  }

}
