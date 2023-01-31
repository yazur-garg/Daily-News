import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  categories : Array<string> = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"];
  flagCategories : boolean[] = [];
  @Input("user") inputUser : User;
  flagMessage : boolean = false;

  constructor(private databaseService: DatabaseService,) { 
  }

  ngOnInit(): void {
    for (let i = 0; i < this.categories.length; i++) {
      if(this.inputUser.prefs.categs.includes(this.categories[i])) {
        this.flagCategories[i] = true;
      }
    }
  }

  updateCategories(categorform: NgForm) {
    this.inputUser.prefs.categs = [];
    for (let category in categorform.value) {
      if (categorform.value[category]) {
        this.inputUser.prefs.categs.push(category);
      }
    }
  }
}
