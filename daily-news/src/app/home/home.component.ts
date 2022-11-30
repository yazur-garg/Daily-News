import { Component, OnInit } from '@angular/core';
import { News } from '../News';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  allNews: News[] = [];
  newslist: News[] = [];
  page: number = 1;
  pagesize: number = 9;

  ngOnInit(): void { 
    this.newsService.getNews().subscribe(
      data => {this.allNews = data.articles; this.getPage(1);console.log(this.allNews)}
    , err => {console.log('Error: ' + err)});
  }

  getPage(num: number){
    if (num < Math.ceil(this.allNews.length / this.pagesize) + 1){
      this.page = num;
      this.newslist = this.allNews.slice((this.page-1)*this.pagesize, this.page*this.pagesize);
      window.scrollTo(0, 0);
    }
  }
}
