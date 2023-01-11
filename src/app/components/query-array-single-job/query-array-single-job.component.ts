import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, Observable, map } from 'rxjs';
import { JobPostModel } from 'src/app/models/job-post.model';
import { JobQueryModel } from 'src/app/models/job-query.model';
import { JobTagsModel } from 'src/app/models/job-tags.model';
import { JobTagsService } from '../../services/job-tags.service';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-query-array-single-job',
  templateUrl: './query-array-single-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryArraySingleJobComponent {

readonly jobs$: Observable<JobQueryModel[]> = combineLatest([
  this._jobTagsService.getAllJobTags(),
  this._jobsService.getAllJobs()
]).pipe(
  map(([tags, jobs]) => this._mapJobQueryModel(tags, jobs))
)

  constructor(private _jobTagsService: JobTagsService, private _jobsService: JobsService) {
  }


  private _mapJobQueryModel(tags: JobTagsModel[], jobs: JobPostModel[]): JobQueryModel[] {
    const tagMap = tags.reduce(
      (a,c) => ({...a, [c.id]: c}),
      {}
    ) as Record <string, JobTagsModel>
    return jobs.map((job) => ({
      title: job.title,
      description: job.description,
      jobTags: (job.jobTagIds ?? []).map((id) => tagMap[id]?.name)
    }))
  }
}
