import { TemplateBindingParseResult } from '@angular/compiler';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { combineLatest, Observable, switchMap,map } from 'rxjs';
import { OrganizationsQueryModel } from 'src/app/queries/organizations-query.model';
import { TeamsQueryModel } from 'src/app/queries/teams-query.model';
import { TeamsModel } from 'src/app/models/teams.model';
import { UsersWithAvatarsModel } from 'src/app/models/users-with-avatars.model';
import { OrganizationsService } from '../../services/organizations.service';
import { UsersWithAvatarsService } from '../../services/users-with-avatars.service';

@Component({
  selector: 'app-query-multi-accordion-organizations',
  templateUrl: './query-multi-accordion-organizations.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryMultiAccordionOrganizationsComponent {

readonly organizations$: Observable<OrganizationsQueryModel[]> = combineLatest([
  this._organizationsService.getAllOrganizations(),
  this._usersWithAvatarsService.getAllUsers()
]).pipe(
  switchMap(([orgs, users]) => this._organizationsService.getOrgsAllTeams(orgs.map((org) => org.id)).pipe(
    map((teamMap) => orgs.map((org) => ({
      name: org.name,
      teams: this._mapTeamQuery(teamMap[org.id], users)
    })))
  ))
)
  constructor(
    private _organizationsService: OrganizationsService,
    private _usersWithAvatarsService: UsersWithAvatarsService
  ) {}


  private _mapTeamQuery(teams: TeamsModel[], users: UsersWithAvatarsModel[]): TeamsQueryModel[] {
    const userMap = users.reduce((a,c) => ({...a,[c.id]:c}),
    
    {} as Record<string, UsersWithAvatarsModel>
    )

    return teams.map((t) => ({
      name: t.name,
      members: t.userIds.map((userId: string) => ({
        avatarUrl: userMap[userId]?.avatar
      }))
    }))
  } 
  
}
