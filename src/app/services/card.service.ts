import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


import { Card } from '../types/card.interface.ts';

@Injectable()
export class CardService {

    constructor(private http: Http) {

    }
    extractCardData(res: Response) {
        let cardData = res.json();
        return cardData || [];
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    getCards(): Observable<Card[]> {

        return this.http.get("/data/cards.json")
            .map(this.extractCardData)
            .catch(this.handleError)
    }
}