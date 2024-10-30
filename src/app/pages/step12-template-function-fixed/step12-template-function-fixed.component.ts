import { Component, computed, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Card } from '../../models/card.interface';
import { TestDataService } from '../../services/test-data.service';

@Component({
  selector: 'app-step12-template-function-fixed',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <div class="container">
      <header class="header">
        <h1>Step 12: Template Functions Fixed</h1>
        <nav>
          <a routerLink="/step-11">← Previous</a>
          <a routerLink="/step-13" class="next">Next Step →</a>
        </nav>
      </header>

      <div class="explanation">
        <h2>The Solution</h2>
        <p>
          Instead of using functions in templates, we can use computed properties
          and signals to improve performance.
        </p>

        <div class="benefits">
          <h3>Benefits:</h3>
          <ul>
            <li>Values are cached and only recomputed when dependencies change</li>
            <li>Better change detection performance</li>
            <li>Cleaner template code</li>
            <li>More predictable behavior</li>
          </ul>
        </div>

        <div class="code-example">
          <h3>Fixed Code:</h3>
          <pre><code>
// Component class
cards = signal&lt;Card[]&gt;(initialCards);

// Computed properties
totalImages = computed(() => this.cards().length);
aboveFoldImages = computed(() =>
  this.cards().filter(card => card.id <= 4).length
);

// Template
&lt;p&gt;Total Images: {{ '{' }} totalImages() {{ '}' }}&lt;/p&gt;
          </code></pre>
        </div>
      </div>

      <div class="demo">
        <p class="instructions">
          Open the console and scroll the page or hover over elements.
          Notice how the computed values are only recalculated when the cards array changes.
        </p>

        <div class="stats">
          <p>Total Images: {{ totalImages() }}</p>
          <p>Images Above Fold: {{ aboveFoldImages() }}</p>
          <button (click)="addCard()" class="btn">Add New Card</button>
        </div>

        <div class="cards-container">
          @for (card of cards(); track card.id) {
            <div class="card">
              <picture>
                <source
                  srcset="https://picsum.photos/400/300.webp?random={{card.id}}"
                  type="image/webp"
                >
                <img
                  ngSrc="https://picsum.photos/400/300?random={{card.id}}"
                  width="400"
                  height="300"
                  [alt]="card.title"
                  [priority]="card.id <= 4"
                >
              </picture>
              <div class="card-content">
                <h3>{{ card.title }}</h3>
                <p class="image-number">Image #{{ card.id }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
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
    .benefits {
      background-color: #f0fff4;
      border: 1px solid #68d391;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem 0;
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
    .instructions {
      background-color: #ebf8ff;
      border: 1px solid #90cdf4;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem 0;
    }
    .stats {
      background-color: #e2e8f0;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    .card {
      border: 1px solid #e2e8f0;
      padding: 1rem;
      border-radius: 4px;
      background: white;
    }
    .card img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
    .card-content {
      padding: 1rem 0;
    }
    .image-number {
      color: #718096;
      font-size: 0.875rem;
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
export class Step12TemplateFunctionFixedComponent {
  // Using signals for reactive state
  cards = signal<Card[]>([]);

  constructor(private testDataService: TestDataService) {
    // Initialize the signal with data from service
    this.cards.set(this.testDataService.generateCardsWithSingleDomain(50));
  }
  // Computed values that automatically update when cards change
  totalImages = computed(() => {
    console.count('totalImages computed');
    return this.cards().length;
  });

  aboveFoldImages = computed(() => {
    console.count('aboveFoldImages computed');
    return this.cards().filter(card => card.id <= 4).length;
  });

  addCard() {
    const currentCards = this.cards();
    const newCard: Card = {
      id: currentCards.length + 1,
      title: `Image ${currentCards.length + 1}`,
      imageUrl: `https://picsum.photos/400/300?random=${currentCards.length + 1}`
    };
    this.cards.set([...currentCards, newCard]);
  }
}
