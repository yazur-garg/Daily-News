import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsSearch } from '../NewsSearch';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private newsService: NewsService, private router: ActivatedRoute) {}
  allArticles: NewsSearch[] = [];
  page: number = 1;
  pagesize: number = 9;
  topicParam: String = "";
  querySub: any;

  ngOnInit(): void { 
    this.querySub = this.router.params.subscribe(params => {
      if (params['topic']) {
        this.topicParam = params['topic'];
      }
   });

    this.handleResponseData();
  }

  getPage(num: number){
    //console.log("is this working?");
    this.page = num;
    this.handleResponseData(num);
    window.scrollTo(0, 0);
  }

  handleResponseData(page: number = 1){
    if (this.topicParam)
    {
      this.newsService.getNewsTopic(this.topicParam, (page - 1)).subscribe(
      data => {
        //console.log("data.response.docs = ", data.response.docs);
        console.log("stuff we need: headline.main, pub_date, abstract, section_name");
        this.allArticles = data.response.docs;
        this.allArticles = this.allArticles.filter((article) => article.headline.main != "");
        console.log(this.allArticles); 
      }
      , err => {console.log('Error: ' + err)});
    }
  }
}
