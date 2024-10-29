import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardItemComponent } from '../../components/card-item/card-item.component';
import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-step2-ngfor-fixed',
  standalone: true,
  imports: [CommonModule, RouterLink, CardItemComponent],
  template: `
    <div class="container">
      <header class="header">
        <h1>Step 2: NgFor Fixed with TrackBy</h1>
        <nav>
          <a routerLink="/step-1">← Previous</a>
          <a routerLink="/step-3" class="next">Next Step →</a>
        </nav>
      </header>

      <div class="explanation">
        <h2>The Solution</h2>
        <p>By using trackBy, Angular can track which items changed and only update those specific elements.
           Notice in the console that existing components are not recreated when adding new cards.</p>

        <div class="code-example">
          <h3>Fixed Code:</h3>
          <pre><code>
&lt;div *ngFor="let card of cards; trackBy: trackByFn"&gt;
  &lt;app-card-item [card]="card"&gt;&lt;/app-card-item&gt;
&lt;/div&gt;

trackByFn(index: number, card: Card): number {{ '{' }}
  return card.id;
{{ '}' }}
          </code></pre>
        </div>
      </div>

      <div class="demo">
        <button (click)="addCard()" class="btn">Add New Card</button>

        <div class="cards-container">
          <app-card-item
            *ngFor="let card of cards; trackBy: trackByFn"
            [card]="card"
          ></app-card-item>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    nav a {
      margin-left: 1rem;
      text-decoration: none;
      color: #4a5568;
    }
    .next {
      background-color: #4a5568;
      color: white !important;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    .explanation {
      background-color: #f0fff4;
      border: 1px solid #9ae6b4;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 2rem;
    }
    .code-example {
      background-color: #2d3748;
      color: #fff;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem 0;
    }
    .code-example code {
      white-space: pre;
    }
    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    .btn {
      background-color: #4a5568;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn:hover {
      background-color: #2d3748;
    }
  `]
})
export class Step2NgforFixedComponent {
  cards: Card[] = [
    {
      id: 1,
      title: 'Card 1',
      imageUrl: 'https://picsum.photos/200/200?random=1'
    },
    {
      id: 2,
      title: 'Card 2',
      imageUrl: 'https://picsum.photos/200/200?random=2'
    }
  ];

  trackByFn(index: number, card: Card): number {
    return card.id;
  }

  addCard() {
    const newCard: Card = {
      id: this.cards.length + 1,
      title: `Card ${this.cards.length + 1}`,
      imageUrl: `https://picsum.photos/200/200?random=${this.cards.length + 1}`
    };
    this.cards = [...this.cards, newCard];
  }
}
