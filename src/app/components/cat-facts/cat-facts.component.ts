import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatModel } from '../../models/cat.model';
import { CatService } from '../../services/cat.service';


@Component({
  selector: 'app-cat-facts',
  styleUrls: ['./cat-facts.component.scss'],
  templateUrl: './cat-facts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactsComponent {
  readonly data$: Observable<CatModel> = this._catService.getOne();

  constructor(private _catService: CatService) {
  }
}
