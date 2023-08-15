import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private paramSource = new BehaviorSubject({});
    sharedParam = this.paramSource.asObservable();

    constructor() { }

    changeParam(param: string) {
        this.paramSource.next({param})
    }
    
}
