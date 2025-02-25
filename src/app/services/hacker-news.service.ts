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

  getAllStories(ids: number[], page: number = 0) {
    const currentIndex = page * 20;

    return ids
      .slice(currentIndex, currentIndex + 20)
      .map((id) =>
        this.http.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      );
  }

  getStory(id: number) {
    return this.http.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
  }
}
