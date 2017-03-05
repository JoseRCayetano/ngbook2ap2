import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Article 1','http://www.google.es',3),
      new Article('Article 2','http://www.google.es',2),
      new Article('Article 3','http://www.google.es',1),
    ];
  }
   addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean {
    console.log(`Adding article tittle: ${title.value} and a link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort( (a: Article, b: Article) => b.votes - a.votes );
  }
  
}
