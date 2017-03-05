import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  /**
   * Host: Sirve para encapsular  cosas dentro de nuestro componente.
   * This tells Angular that on the host element (the app-article tag) we want to set the class attribute to have “row”.
   */
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
   // this.article = new Article('Angular 2','http://angular.io',10);
   }
   
  ngOnInit() {
  }

   voteUp():boolean {
       this.article.voteUp();
        /**
         * Ponemos false, debido a que el evento click se propaga al padre haciendo que se recargue la página.
         * Poniendolo a false ya no es propagado.
         */
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }

 


}
