import { Component, OnInit } from '@angular/core';
import { News } from '../News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  newslist: Array<News> = [
    {"source":{"id":null,"name":"MLB Trade Rumors"},"author":"Darragh McDonald","title":"Yankees To Re-Sign Anthony Rizzo To Multi-Year Deal - MLB Trade Rumors","description":"The Yankees and Anthony Rizzo are in agreement to reunite on a two-year deal with a $40MM guarantee. That comes &hellip;","url":"https://www.mlbtraderumors.com/2022/11/yankees-to-re-sign-anthony-rizzo-to-multi-year-deal.html","urlToImage":"https://cdn.mlbtraderumors.com/files/2022/11/anthony-rizzo-yankees-ny-1024x683.jpg","publishedAt":"2022-11-15T22:30:00Z","content":"The Yankees and Anthony Rizzo are in agreement to reunite on a two-year deal with a $40MM guarantee. That comes in the form of a $17MM salary in 2023 and 2024, followed by a $17MM club option for 202… [+3361 chars]"},
    {"source":{"id":"cnn","name":"CNN"},"author":"Tim Lister, Tara John, Antonia Mortensen, Anna Chernova, Emmet Lyons","title":"Poland holds emergency security meeting after reports of fatal explosion, as Russian missiles bombard nearby Ukraine - CNN","description":"Poland convened an emergency meeting of national security officials on Tuesday, after Polish media reported projectiles killed two people near the border with Ukraine on Tuesday.","url":"https://www.cnn.com/2022/11/15/europe/poland-missile-rocket-nato-przewodow-ukraine-intl/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/221115130337-poland-projectile-tvn.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2022-11-15T22:03:00Z","content":"Poland convened an emergency meeting of national security officials on Tuesday, after Polish media reported projectiles killed two people near the border with Ukraine on Tuesday. \r\nPolish officials c… [+7073 chars]"},
    {"source":{"id":null,"name":"MLB Trade Rumors"},"author":"Darragh McDonald","title":"Yankees To Re-Sign Anthony Rizzo To Multi-Year Deal - MLB Trade Rumors","description":"The Yankees and Anthony Rizzo are in agreement to reunite on a two-year deal with a $40MM guarantee. That comes &hellip;","url":"https://www.mlbtraderumors.com/2022/11/yankees-to-re-sign-anthony-rizzo-to-multi-year-deal.html","urlToImage":"https://cdn.mlbtraderumors.com/files/2022/11/anthony-rizzo-yankees-ny-1024x683.jpg","publishedAt":"2022-11-15T22:30:00Z","content":"The Yankees and Anthony Rizzo are in agreement to reunite on a two-year deal with a $40MM guarantee. That comes in the form of a $17MM salary in 2023 and 2024, followed by a $17MM club option for 202… [+3361 chars]"},
    {"source":{"id":"cnn","name":"CNN"},"author":"Tim Lister, Tara John, Antonia Mortensen, Anna Chernova, Emmet Lyons","title":"Poland holds emergency security meeting after reports of fatal explosion, as Russian missiles bombard nearby Ukraine - CNN","description":"Poland convened an emergency meeting of national security officials on Tuesday, after Polish media reported projectiles killed two people near the border with Ukraine on Tuesday.","url":"https://www.cnn.com/2022/11/15/europe/poland-missile-rocket-nato-przewodow-ukraine-intl/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/221115130337-poland-projectile-tvn.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2022-11-15T22:03:00Z","content":"Poland convened an emergency meeting of national security officials on Tuesday, after Polish media reported projectiles killed two people near the border with Ukraine on Tuesday. \r\nPolish officials c… [+7073 chars]"}
  ];
  ngOnInit(): void {
  }

}
