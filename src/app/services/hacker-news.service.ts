import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
  constructor(private readonly http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllStoriesIds(type: string) {
    return this.http.get(
      `https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`
    );
  }

  getAllStories(ids: number[], page: number) {
    const currentIndex = page * 20 - 1;
    const usedIndex = currentIndex < 0 ? 0 : currentIndex;

    return ids
      .slice(usedIndex, usedIndex + 20)
      .map((id) =>
        this.http.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      );
  }
}
