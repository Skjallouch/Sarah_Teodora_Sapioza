import { Component, OnInit } from '@angular/core';
import { Author, AuthorService } from '../../../authors/services/author.service';
import { BlogArticle } from '../../models/blog-article.model';
import { BlogArticleService } from '../../services/blog-article.service';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    FormsModule,
    NgForOf // Pas besoin de HttpClientModule ici
  ]
})
export class HomeComponent implements OnInit {
  articles: BlogArticle[] = [];
  groupedArticles: { [authorName: string]: BlogArticle[] } = {};
  authors: Author[] = [];
  newArticle: BlogArticle = {
    title: '',
    content: '',
    authorName: '',
    isRead: [],
  };

  constructor(
    private blogArticleService: BlogArticleService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.loadArticles();
    this.loadAuthors();
  }

  loadArticles(): void {
    this.blogArticleService.getAll().subscribe(
      (data) => {
        this.articles = data;
        this.groupArticlesByAuthor();
      },
      (error) => console.error('Error loading articles', error)
    );
  }

  loadAuthors(): void {
    this.authorService.getAll().subscribe(
      (data) => (this.authors = data),
      (error) => console.error('Error loading authors', error)
    );
  }

  groupArticlesByAuthor(): void {
    this.groupedArticles = this.articles.reduce((acc, article) => {
      const author = article.authorName || 'Unknown';
      acc[author] = acc[author] || [];
      acc[author].push(article);
      return acc;
    }, {} as { [authorName: string]: BlogArticle[] });
  }

  publishArticle(): void {
    if (this.newArticle.title && this.newArticle.content && this.newArticle.authorName) {
      this.blogArticleService.create(this.newArticle).subscribe(
        (article) => {
          this.articles.push(article);
          this.groupArticlesByAuthor();
          this.newArticle = { title: '', content: '', authorName: '', isRead: [] };
        },
        (error) => console.error('Error publishing article', error)
      );
    }
  }

  protected readonly Object = Object;
}
