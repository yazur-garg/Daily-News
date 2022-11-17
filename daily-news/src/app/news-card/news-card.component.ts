import { Component, Input, OnInit } from '@angular/core';
import { News } from '../News';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input("news") inputnews : News;
  constructor() { }

  ngOnInit(): void {
  }

}
