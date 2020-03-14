
import * as yaml from 'js-yaml';

import { Injectable } from '@angular/core';
import { HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DesignsService {

    constructor(private http: HttpClient) {
    }

    getDesigns() {

        /**
         * This illustrates how to use an Angular service to get data from a yaml file
         * it gets the http response, the contents of they yaml file, as plain text, and then uses js-yaml (https://github.com/nodeca/js-yaml)
         * to parse the yaml string.
         */
        return this.http
            .get('assets/designs.yaml', { observe: 'response', responseType: 'text' })
            .pipe(
                map(
                    (data) => {

                      //  console.log('design service, have data', data.body);
                      //  console.log(yaml.safeLoad(data.body));

                        return yaml.safeLoad(data.body);
                    }
                ),
                tap(
                    (data) => { },
                    (err) => { console.log('error in getDesigns');
                        console.log(`${err.message}; ${err.status}, ${err.statusText}`);
                        return err; }
                )
            );

    }

}
