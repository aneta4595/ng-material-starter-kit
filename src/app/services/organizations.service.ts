import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable,map } from 'rxjs';
import { OrganizationsModel } from '../models/organizations.model';
import { TeamsModel } from '../models/teams.model';

@Injectable({ providedIn: 'root' })
export class OrganizationsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllOrganizations(): Observable<OrganizationsModel[]> {
    return this._httpClient.get<OrganizationsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/organizations');
  }

  getOrgsAllTeams(orgIds: string[]): Observable<Record<string, TeamsModel[]>> {
    return forkJoin(
        orgIds.map((orgId) => this._httpClient.get<TeamsModel[]> (`https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${orgId}/teams`))
    ).pipe(
        map((orgsTeams: TeamsModel[][]) => 
        orgsTeams.reduce((a,c,idx) => ({...a,[orgIds[idx]]:c}),
        {} as Record<string, TeamsModel[]>
        )
        )
    )
  }
}
