import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { JokeModel } from '../../models/joke.model';
import { JokeService } from '../../services/joke.service';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeComponent {
  readonly data$: Observable<JokeModel> = this._activatedRoute.params.
    pipe(switchMap(data => this._jokeService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _jokeService: JokeService) {
  }

}
