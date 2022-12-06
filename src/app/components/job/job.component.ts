import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JobTagModel } from '../../models/job-tag.model';
import { JobTagService } from '../../services/job-tag.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent {
  readonly jobTagIdsForm: FormGroup = new FormGroup({})

  readonly jobForm: FormGroup = new FormGroup({
    description: new FormControl(),
    title: new FormControl(),
    jobTagIds: this.jobTagIdsForm
  });

  readonly jobTags$: Observable<JobTagModel[]> = this._jobTagService.getAll().
    pipe(tap(data => this.setControls(data)));

  constructor(private _jobTagService: JobTagService, private _postService: PostService) {
  }

  setControls(jobTagIds: JobTagModel[]): void {
    jobTagIds.forEach(
      jt => this.jobTagIdsForm.addControl(
        jt.id, new FormControl(false)
      )
    )

  }

  onJobFormSubmitted(jobForm: FormGroup): void {
    this._postService.create({
      title: jobForm.get('title')?.value,
      description: jobForm.get('description')?.value,
      jobTagIds: Object.keys(this.jobTagIdsForm.value).filter((k) => this.jobTagIdsForm.value[k] === true).map((id) => +id)

    }).subscribe();
  }
}
