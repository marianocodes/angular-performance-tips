import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step10-format-fixed',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <div class="container">
      <header class="header">
        <h1>Step 10: Modern Image Formats</h1>
        <nav>
          <a routerLink="/step-9">← Previous</a>
          <a routerLink="/step-11" class="next">Next Step →</a>
        </nav>
      </header>

      <div class="explanation">
        <h2>The Solution</h2>
        <p>
          Using modern formats like WebP and AVIF with proper fallbacks ensures optimal
          file sizes while maintaining compatibility.
        </p>

        <div class="benefits">
          <h3>Benefits:</h3>
          <ul>
            <li>Smaller file sizes (up to 50% smaller)</li>
            <li>Better compression</li>
            <li>Maintained image quality</li>
            <li>Backward compatibility</li>
          </ul>
        </div>

        <div class="code-example">
          <h3>Fixed Code:</h3>
          <pre><code>
&lt;picture&gt;
  &lt;source
    srcset="image.avif"
    type="image/avif"
  &gt;
  &lt;source
    srcset="image.webp"
    type="image/webp"
  &gt;
  &lt;img
    ngSrc="image.jpg"
    width="800"
    height="400"
    alt="Fallback image"
    priority="true"
  &gt;
&lt;/picture&gt;
          </code></pre>
        </div>
      </div>

      <div class="demo">
        <p class="instructions">
          Compare these modern formats in the Network tab. Notice the significantly smaller file sizes
          while maintaining the same visual quality:
        </p>

        <div class="format-comparison">
          <div class="format">
            <h3>AVIF Format (Best)</h3>
            <picture>
              <source
                srcset="assets/demo-image.avif"
                type="image/avif"
              >
              <source
                srcset="assets/demo-image.webp"
                type="image/webp"
              >
              <img
                ngSrc="assets/demo-image.jpg"
                width="800"
                height="400"
                alt="AVIF image"
                priority="true"
              >
            </picture>
            <p class="size-info">AVIF version: ~50KB</p>
          </div>

          <div class="format">
            <h3>WebP Format (Good)</h3>
            <picture>
              <source
                srcset="assets/demo-image.webp"
                type="image/webp"
              >
              <img
                ngSrc="assets/demo-image.jpg"
                width="800"
                height="400"
                alt="WebP image"
                priority="true"
              >
            </picture>
            <p class="size-info">WebP version: ~100KB</p>
          </div>
        </div>

        <div class="format-info">
          <h3>Format Support</h3>
          <ul>
            <li>AVIF: Newest format, best compression (Chrome, Firefox)</li>
            <li>WebP: Widely supported, good compression</li>
            <li>JPEG/PNG: Universal fallback support</li>
          </ul>
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
    .format-comparison {
      display: grid;
      gap: 2rem;
      margin-top: 2rem;
    }
    .format {
      border: 1px solid #e2e8f0;
      padding: 1rem;
      border-radius: 4px;
    }
    .format img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
    .size-info {
      margin-top: 1rem;
      padding: 0.5rem;
      background-color: #ebf8ff;
      border-radius: 4px;
      text-align: center;
    }
    .format-info {
      margin-top: 2rem;
      padding: 1rem;
      background-color: #ebf8ff;
      border-radius: 4px;
    }
  `]
})
export class Step10FormatFixedComponent {}