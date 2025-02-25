import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, mergeMap } from 'rxjs';

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

  getAllStories(type: string, page: number) {
    const currentIndex = page * 20 - 1;
    const usedIndex = currentIndex < 0 ? 0 : currentIndex;

    return this.http
      .get(
        `https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`
      )
      .pipe(
        mergeMap((ids) =>
          forkJoin(
            (ids as number[])
              .slice(usedIndex, 20)
              .map((id) =>
                this.http.get(
                  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
                )
              )
          )
        )
      );
  }
}
