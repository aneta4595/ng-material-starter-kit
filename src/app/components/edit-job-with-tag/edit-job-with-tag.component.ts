import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { JobTagModel } from '../../models/job-tag.model';
import { JobTagsModel } from '../../models/job-tags.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-edit-job-with-tag',
  templateUrl: './edit-job-with-tag.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJobWithTagComponent {
  readonly jobTagIds: FormGroup = new FormGroup({});

  readonly jobTags$: Observable<JobTagModel[]> = this._jobService.getAllTags().pipe(tap(data => this.setControls(data)));
  readonly form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    jobTagIds: this.jobTagIds
  });
  readonly details$: Observable<JobTagsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._jobService.getOneJob(data['id'])),
    tap((details) => this.form.patchValue({ title: details.title, description: details.description, jobTagIds: details.jobTagIds, id: details.id }))
  );

  constructor(private _jobService: JobService, private _activatedRoute: ActivatedRoute) {
  }

  onFormSubmitted(form: FormGroup): void {
    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data) => this._jobService.updateJob({
        id: data['id'],
        title: form.value.title,
        description: form.value.description,
        jobTagIds: Object.keys(this.jobTagIds.value).filter((k) => this.jobTagIds.value[k] === true).map((i) => +i)

      }))

    )
      .subscribe();
  }
  setControls(jobTagIds: JobTagModel[]): void {
    jobTagIds.forEach(
      jobTagIds => this.jobTagIds.addControl(
        jobTagIds.id, new FormControl(false)
      )
    )
  }
}
