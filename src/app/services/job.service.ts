import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTagModel } from '../models/job-tag.model';
import { JobTagsModel } from '../models/job-tags.model';

@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<JobTagModel> {
    return this._httpClient.get<JobTagModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + id);
  }

  update(jobTag: JobTagModel): Observable<void> {
    return this._httpClient.put<void>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + jobTag.id, jobTag);
  }

  getAllTags(): Observable<JobTagModel[]> {
    return this._httpClient.get<JobTagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }

  getOneJob(id: string): Observable<JobTagsModel> {
    return this._httpClient.get<JobTagsModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts/' + id);
  }

  updateJob(jobTag: JobTagsModel): Observable<void> {
    return this._httpClient.put<void>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts/' + jobTag.id, jobTag);
  }
}
