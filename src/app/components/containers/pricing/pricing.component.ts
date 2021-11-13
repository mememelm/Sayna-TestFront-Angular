import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  listBasic = [
    {states: 'Rapidiously strategize value'},
    {states: 'Progressively visualize leadership'},
    {states: 'Equity invested supply chains'}
  ]

  listProfessional = [
    {states: 'Rapidiously strategize value'},
    {states: 'Progressively visualize leadership'},
    {states: 'Equity invested supply chains'},
    {states: 'Proactively leverage'}
  ]

  listPremium = [
    {states: 'Rapidiously strategize value'},
    {states: 'Progressively visualize leadership'},
    {states: 'Equity invested supply chains'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
