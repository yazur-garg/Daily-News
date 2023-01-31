import { Component, Input } from '@angular/core';
import { NewsSearch } from '../NewsSearch';

@Component({
  selector: 'app-search-news-card',
  templateUrl: './search-news-card.component.html',
  styleUrls: ['./search-news-card.component.css']
})
export class SearchNewsCardComponent {
  @Input("article") inputnews : NewsSearch;
  constructor() { }
}
