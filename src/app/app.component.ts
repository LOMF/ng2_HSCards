import {Component, OnInit} from "@angular/core"


import { CardListComponent } from './parts/cardList/cardList.component';
import { FilterFormComponent } from './parts/FilterForm/FilterForm.component';
import { CardDetailsComponent } from './parts/CardDetails/CardDetails.component';


@Component({
    selector: "hs-card-app"
    , templateUrl: "./app/app.component.html"
    , directives: [CardListComponent, FilterFormComponent, CardDetailsComponent]
    , styleUrls: ['./app/app.component.css']
    
})
export class AppComponent implements OnInit {
    public filter;
    public selectedCard;
    constructor() {
        this.filter = {};
    }
    onFilterChange({key, value}) {
        this.filter[key] = value;
        console.log(`new ${key} filter: ${value}`);
        return this.filter;
    }
    ngOnInit() {
        console.log("Application component initialized ...");
    }
    onCardSelected(card) {
        console.log(card);
    }
}
