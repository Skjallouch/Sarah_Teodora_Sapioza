/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { PaperService } from '../../../authors/services/paper.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let paperServiceMock: jasmine.SpyObj<PaperService>;

  beforeEach(async () => {
    paperServiceMock = jasmine.createSpyObj('PaperService', ['submitArticle', 'getAllArticles']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule],
      providers: [{ provide: PaperService, useValue: paperServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('devrait afficher le formulaire après `toggleForm()`', () => {
    expect(component.showForm).toBeFalse();
    component.toggleForm();
    expect(component.showForm).toBeTrue();
  });

  it('devrait ne pas publier un article si des champs sont vides', () => {
    spyOn(window, 'alert');
    component.newArticle = { title: '', authorId: '', field: '', publishedIn: '', keywords: '', abstract: '', DOI: '' };
    component.publishArticle();
    expect(window.alert).toHaveBeenCalledWith('❌ Tous les champs doivent être remplis !');
  });

  it('devrait publier un article et rafraîchir la liste', () => {
    spyOn(component, 'loadArticles');
    paperServiceMock.submitArticle.and.returnValue(of({ message: 'Article ajouté' }));

    component.newArticle = { title: 'Test', authorId: 123, field: 'Science', publishedIn: 'Test Journal', keywords: 'test', abstract: 'Résumé test', DOI: '12345' };
    component.publishArticle();

    expect(paperServiceMock.submitArticle).toHaveBeenCalled();
    expect(component.loadArticles).toHaveBeenCalled();
  });

  it('devrait gérer une erreur lors de la publication', () => {
    spyOn(window, 'alert');
    paperServiceMock.submitArticle.and.returnValue(throwError(() => new Error('Erreur serveur')));

    component.newArticle = { title: 'Test', authorId: 123, field: 'Science', publishedIn: 'Test Journal', keywords: 'test', abstract: 'Résumé test', DOI: '12345' };
    component.publishArticle();

    expect(window.alert).toHaveBeenCalledWith('Erreur lors de la publication.');
  });

  it('devrait charger les articles', () => {
    const articlesMock = [{ title: 'Test', authorId: 123 }];
    paperServiceMock.getAllArticles.and.returnValue(of(articlesMock));

    component.newArticle.authorId = 123;
    component.loadArticles();

    expect(paperServiceMock.getAllArticles).toHaveBeenCalledWith(123);
    expect(component.articles).toEqual(articlesMock);
  });

  it('devrait ne pas charger les articles si `authorId` est absent', () => {
    spyOn(console, 'error');
    component.newArticle.authorId = null;
    component.loadArticles();
    expect(console.error).toHaveBeenCalledWith("❌ Erreur : L'ID de l'auteur est manquant !");
  });
});
*/
