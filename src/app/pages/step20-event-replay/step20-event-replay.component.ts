import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Card } from '../../models/card.interface';
import { PLATFORM_ID, inject } from '@angular/core';
import { TestDataService } from '../../services/test-data.service';

@Component({
  selector: 'app-step20-event-replay',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <div class="container">
      <header class="header">
        <h1>Step 20: Event Replay During Hydration</h1>
        <nav>
          <a routerLink="/step-19">← Previous</a>
          <a routerLink="/" class="next">Home</a>
        </nav>
      </header>

      <div class="explanation">
        <h2>Event Replay</h2>
        <p>
          When users interact with the page before hydration is complete,
          Angular can capture and replay those events once the application becomes interactive.
        </p>

        <div class="benefits">
          <h3>Benefits:</h3>
          <ul>
            <li>No lost user interactions</li>
            <li>Seamless user experience</li>
            <li>Better perceived performance</li>
            <li>Improved user confidence</li>
          </ul>
        </div>

        <div class="code-example">
          <h3>Implementation:</h3>
          <pre><code>
// Enable event replay in app.config.ts
provideClientHydration({{ '{' }}
  replayEvents: true
{{ '}' }})

// Events are automatically captured and replayed
&lt;button (click)="handleClick()"&gt;
  Click me during hydration!
&lt;/button&gt;
          </code></pre>
        </div>
      </div>

      <div class="demo">
        <p class="instructions">
          Try clicking the cards before hydration is complete.
          Your clicks will be captured and replayed once the application becomes interactive.
          <br><br>
          <strong>Watch the console to see the events being replayed!</strong>
        </p>

        <div class="loading-info" *ngIf="!isInteractive">
          <div class="status">
            Application is hydrating...
            <br>
            <small>Click cards now - events will be replayed!</small>
          </div>
          <div class="timer">
            {{ timer }}s
          </div>
        </div>

        <div class="event-log">
          <h3>Event Log:</h3>
          <div class="log-entries">
            @for (event of eventLog; track event.timestamp) {
              <div class="log-entry" [class.replayed]="event.replayed">
                {{ event.message }}
                <small>{{ event.timestamp | date:'HH:mm:ss.SSS' }}</small>
              </div>
            }
          </div>
        </div>

        <div class="cards-container">
          @for (card of cards; track card.id) {
            <div
              class="card"
              [class.interactive]="isInteractive"
              (click)="handleCardClick(card)"
            >
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
                <p class="load-info" [class.success]="isInteractive">
                  {{ isInteractive ? 'Interactive!' : 'Capturing clicks...' }}
                </p>
                <button
                  class="demo-button"
                  [class.capturing]="!isInteractive"
                  (click)="handleButtonClick(card, $event)"
                >
                  {{ isInteractive ? 'Click me!' : 'Click will be replayed' }}
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* ... previous styles ... */
    .event-log {
      background-color: #1a202c;
      color: #fff;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem 0;
      max-height: 200px;
      overflow-y: auto;
    }
    .log-entries {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .log-entry {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      background-color: #2d3748;
      border-radius: 4px;
      font-family: monospace;
    }
    .log-entry.replayed {
      background-color: #2f855a;
    }
    .log-entry small {
      color: #a0aec0;
    }
    .demo-button.capturing {
      background-color: #ed8936;
    }
    .card {
      position: relative;
    }
    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .card:not(.interactive):hover::before {
      opacity: 1;
    }
  `]
})
export class Step20EventReplayComponent implements OnInit {
  cards: Card[] = [];
  isInteractive = false;
  timer = 3;
  private interval: any;
  private platformId = inject(PLATFORM_ID);

  eventLog: Array<{
    message: string;
    timestamp: Date;
    replayed?: boolean;
  }> = [];

  constructor(private testDataService: TestDataService) {
    this.isInteractive = false;
    this.cards = this.testDataService.generateCardsWithSingleDomain(20);
  }

  ngOnInit() {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.startTimer();
    //   console.log('Event replay enabled - try clicking before hydration!');
    // }
  }

  private startTimer() {
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(this.interval);
        this.isInteractive = true;
        console.log('Application is now interactive!', true);
      }
    }, 1000);
  }

  handleCardClick(card: Card) {
    console.log(`Card ${card.id} click handled`);
    // this.logEvent(`Card ${card.id} clicked`, this.isInteractive);
    // if (this.isInteractive) {
    // } else {
    //   console.log(`Card ${card.id} click captured - will be replayed`);
    // }
  }

  handleButtonClick(card: Card, event: Event) {
    // event.stopPropagation(); // Prevent card click
    console.log(`Button clicked on card ${card.id}`, this.isInteractive);
    // if (this.isInteractive) {
    //   console.log(`Button click on card ${card.id} handled`);
    // } else {
    //   console.log(`Button click on card ${card.id} captured - will be replayed`);
    // }
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
