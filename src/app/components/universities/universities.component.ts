import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  debounceTime, map, Observable } from "rxjs";
import { switchMap } from 'rxjs/operators';
import { UniversitiesModel } from '../../models/universities.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesComponent {
  readonly search: FormGroup = new FormGroup({
    country: new FormControl()
  });
  readonly startsWith$: Observable<string> = this.search.valueChanges.pipe(map((form) => form.country),
    debounceTime(1000))

  readonly universities$: Observable<UniversitiesModel[]> = this.startsWith$.pipe(switchMap(data => this._universitiesService.getAll(data)))


  constructor(private _universitiesService: UniversitiesService) {
  }

  onSearchSubmitted(search: FormGroup): void {
  }

}
