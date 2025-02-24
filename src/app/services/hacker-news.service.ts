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

  getAllStories() {
    return this.http
      .get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .pipe(
        mergeMap((ids) =>
          forkJoin(
            (ids as number[]).map((id) =>
              this.http.get(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
              )
            )
          )
        )
      );
  }
}
