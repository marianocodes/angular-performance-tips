import { Injectable } from '@angular/core';
import { Card } from '../models/card.interface';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  private imageSources = [
    {
      domain: 'placehold.co',
      getUrl: (id: number) => `https://placehold.co/320x150?text=Card${id}`
    },
    {
      domain: 'picsum.photos',
      getUrl: (id: number) => `https://picsum.photos/320/150?random=${id}`
    },
    {
      domain: 'dummyimage.com',
      getUrl: (id: number) => `https://dummyimage.com/320x150/000/fff&text=Card${id}`
    },
    {
      domain: 'placekitten.com',
      getUrl: (id: number) => `https://placekitten.com/320/150?image=${id}`
    },
    {
      domain: 'loremflickr.com',
      getUrl: (id: number) => `https://loremflickr.com/320/150?lock=${id}`
    },
    {
      domain: 'via.placeholder.com',
      getUrl: (id: number) => `https://via.placeholder.com/320x150?text=Card${id}`
    },
    {
      domain: 'pravatar.cc',
      getUrl: (id: number) => `https://i.pravatar.cc/320?img=${id}`
    }
  ];

  generateCardsWithMultipleDomains(count: number = 50): Card[] {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: `Card ${i + 1}`,
      imageUrl: this.imageSources[i % this.imageSources.length].getUrl(i + 1)
    }));
  }

  generateCardsWithSingleDomain(count: number = 50): Card[] {
    // Using picsum.photos as our "CDN" since it's reliable and fast
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: `Card ${i + 1}`,
      imageUrl: `https://picsum.photos/320/150?random=${i + 1}`
    }));
  }
}
