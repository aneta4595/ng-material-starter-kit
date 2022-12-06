import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable()
export class PostService {
  constructor(private _httpClient: HttpClient) {
  }

  create(job: Omit<PostModel, 'id'>): Observable<void> {
    return this._httpClient.post<void>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts', job);
  }
}
