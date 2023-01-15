import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersWithAvatarsModel } from '../models/users-with-avatars.model';

@Injectable({ providedIn: 'root' })
export class UsersWithAvatarsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllUsers(): Observable<UsersWithAvatarsModel[]> {
    return this._httpClient.get<UsersWithAvatarsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/users-with-avatars');
  }
}
