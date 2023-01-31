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
  topicParam: String = "";
  querySub: any;

  ngOnInit(): void { 
    this.querySub = this.router.params.subscribe(params => {
      if (params['category']) {
        this.categoryParam = params['category'];
      }

      if (params['topic']) {
        this.topicParam = params['topic'];
      }
   });

    if (this.topicParam) {
      this.newsService.getNewsTopic(this.topicParam).subscribe(
        data => {this.allNews = data.response.docs;
          console.log("this.topicParam = ", this.topicParam);
          console.log("data = ", data);
          //console.log("data.response.docs[0].headline.main = ", data.response.docs[0].headline.main);
          console.log("this.allNews = ", this.allNews);

          //this.allNews = this.allNews.filter((news) => news.headline.main != "");
          this.getPage(1);
          //console.log(this.allNews); 
        }
        , err => {console.log('Error: ' + err)});
      }
    else {
      this.newsService.getNewsCateg(this.categoryParam).subscribe(
        data => {this.allNews = data.results;
          this.allNews = this.allNews.filter((news) => news.title != "");
          this.getPage(1);
          console.log(this.allNews); 
        }
      , err => {console.log('Error: ' + err)});
    }
  }

  getPage(num: number){
    if (num < Math.ceil(this.allNews.length / this.pagesize) + 1){
      this.page = num;
      this.newslist = this.allNews.slice((this.page-1)*this.pagesize, this.page*this.pagesize);
      window.scrollTo(0, 0);
    }
  }
}
