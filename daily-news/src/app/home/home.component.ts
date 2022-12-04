import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../News';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private newsService: NewsService, private router: ActivatedRoute) {}
  allNews: News[] = [];
  newslist: News[] = [];
  page: number = 1;
  pagesize: number = 9;
  categoryParam: String = "home";
  querySub: any;

  ngOnInit(): void { 
    this.querySub = this.router.params.subscribe(params => {
      if (params['category']) {
        this.categoryParam = params['category'];
      }
   });

    this.newsService.getNewsCateg(this.categoryParam).subscribe(
      data => {this.allNews = data.results; this.getPage(1);console.log(this.allNews);}
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
