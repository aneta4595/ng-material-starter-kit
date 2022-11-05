import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgeModel } from '../../models/age.model';
import { AgeService } from '../../services/age.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
  readonly data$: Observable<AgeModel> = this._activatedRoute.params.
  pipe(switchMap(data => this._ageService.getOne(data['name'])));

  constructor(private _activatedRoute: ActivatedRoute, private _ageService: AgeService) {
  }
}
