import { Component } from '@angular/core';
import { SelectionOption } from './shared/selection-option';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  label = 'Category'

  categories = [
    new SelectionOption({ value: 'BE',description: 'Business/Economy'}),
    new SelectionOption({ value: 'EN',description: 'Entertainment'}),
    new SelectionOption({ value: 'HE',description: 'Health'}),
    new SelectionOption({ value: 'LS',description: 'Lifestyle'}),
    new SelectionOption({ value: 'PO',description: 'Politics'}),
    new SelectionOption({ value: 'SP',description: 'Sports'}),
    new SelectionOption({ value: 'WO',description: 'World'})
  ]

  articles: Array<Article> = []

  loadArticle(category: string): void {
    this.articles = [
      new Article ({
        title: `title ${category} 1`,
        description: `this is the description of ${category} 1`
      }),
      new Article ({
        title: `title ${category} 2`,
        description: `this is the description of ${category} 2`
      }),
      new Article ({
        title: `title ${category} 3`,
        description: `this is the description of ${category} 3`
      }),
      new Article ({
        title: `title ${category} 4`,
        description: `this is the description of ${category} 4`
      }),
      new Article ({
        title: `title ${category} 5`,
        description: `this is the description of ${category} 5`
      }),
      new Article ({
        title: `title ${category} 6`,
        description: `this is the description of ${category} 6`
      }),
      new Article ({
        title: `title ${category} 7`,
        description: `this is the description of ${category} 7`
      })
    ]
  }

  changeCategory(value: string): void {
    const category = this.categories.find(c => c.value === value)

    if (category?.description !== undefined) {
      this.loadArticle(category.description)
    }
  }
}
