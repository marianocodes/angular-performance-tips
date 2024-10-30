import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step8-image-size-fixed',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <div class="container">
      <header class="header">
        <h1>Step 8: Responsive Images with srcset</h1>
        <nav>
          <a routerLink="/step-7">← Previous</a>
          <a routerLink="/step-9" class="next">Next Step →</a>
        </nav>
      </header>

      <div class="explanation">
        <h2>The Solution</h2>
        <p>
          Using srcset and sizes attributes allows browsers to download the most appropriate
          image size based on the device's characteristics.
        </p>

        <div class="benefits">
          <h3>Benefits:</h3>
          <ul>
            <li>Appropriate image sizes for different devices</li>
            <li>Reduced bandwidth usage</li>
            <li>Faster page loads</li>
            <li>Better user experience</li>
          </ul>
        </div>

        <div class="code-example">
          <h3>Fixed Code:</h3>
          <pre><code>
&lt;picture&gt;
  &lt;source
    media="(min-width: 1024px)"
    srcset="large.jpg"
  &gt;
  &lt;source
    media="(min-width: 768px)"
    srcset="medium.jpg"
  &gt;
  &lt;img
    ngSrc="small.jpg"
    width="400"
    height="300"
    alt="Responsive image"
  &gt;
&lt;picture&gt;
          </code></pre>
        </div>
      </div>

      <div class="demo">
        <p class="instructions">
          Resize your browser window and check the Network tab. Different image sizes
          will be downloaded based on your viewport width.

          Here is more information about the best practices for responsive images:
          <a href="https://dev.to/activenode/srcset-sizes-picture-media-what-you-might-not-have-known-31nf">
            https://dev.to/activenode/srcset-sizes-picture-media-what-you-might-not-have-known-31nf
          </a>
        </p>

        <div class="image-container">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcset="https://picsum.photos/1080/720?random=1"
            >
            <source
              media="(min-width: 768px)"
              srcset="https://picsum.photos/720/480?random=1"
            >
            <img
              ngSrc="https://picsum.photos/400/300?random=1"
              width="400"
              height="300"
              alt="Responsive image"
              priority="true"
            >
          </picture>
          <p class="image-info">
            This image adapts its size based on the viewport width:
          </p>
          <ul>
            <li>Desktop (≥1024px): 1080x720</li>
            <li>Tablet (≥768px): 720x480</li>
            <li>Mobile: 400x300</li>
          </ul>
        </div>

        <div class="cards-container">
          @for (i of [1, 2, 3, 4]; track i) {
            <div class="card">
              <picture>
                <source
                  media="(min-width: 1200px)"
                  srcset="https://picsum.photos/600/400?random={{i}}"
                >
                <source
                  media="(min-width: 768px)"
                  srcset="https://picsum.photos/400/300?random={{i}}"
                >
                <img
                  ngSrc="https://picsum.photos/300/200?random={{i}}"
                  width="300"
                  height="200"
                  alt="Card image {{i}}"
                >
              </picture>
              <p>Card {{i}}</p>
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
    .image-container {
      margin: 2rem 0;
      border: 1px solid #e2e8f0;
      padding: 1rem;
      border-radius: 4px;
    }
    .image-container img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
    .image-info {
      margin-top: 1rem;
      padding: 1rem;
      background-color: #ebf8ff;
      border-radius: 4px;
    }
    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    .card {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 4px;
      background: white;
    }
    .card img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  `]
})
export class Step8ImageSizeFixedComponent {}
