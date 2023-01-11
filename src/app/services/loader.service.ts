import { Injectable } from '@angular/core';
import { Observable, of, delay , map} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {

    getNames(): Observable<string[]>  {
        return of(['Tom', 'Kate', 'Rob', 'Steph']).pipe(
            delay(2000),
            map((names) => {
                if(Math.random() > 0.5) {
                    throw new Error('Opss!...');
                }
                return names;
            })
        )

}
}
