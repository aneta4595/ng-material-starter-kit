import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { JobTagModel } from '../../models/job-tag.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-edit-job-tag',
  templateUrl: './edit-job-tag.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJobTagComponent {
  readonly form: FormGroup = new FormGroup({ name: new FormControl() });
  readonly details$: Observable<JobTagModel> = this._activatedRoute.params.pipe(
  switchMap(data => this._jobService.getOne(data['id'])),
  tap((details) => this.form.patchValue({name: details.name}))
  
  );

  constructor(private _activatedRoute: ActivatedRoute, private _jobService: JobService) {
  }

  onFormSubmitted(form: FormGroup): void {
  }
}
