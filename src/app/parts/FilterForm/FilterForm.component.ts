import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardSet, Rarity, Race, CardClass, CardType }  from '../../types/card.interface';
@Component({
    selector: 'filter-form',
    templateUrl: './app/parts/FilterForm/FilterForm.component.html'
    , styleUrls: ['./app/parts/FilterForm/FilterForm.component.css']
})
export class FilterFormComponent implements OnInit {
    cardName: string;
    public CardSet;
    public Race;
    public Rarity;
    public CardClass;
    public CardType; 
    @Output() filterUpdated = new EventEmitter();
    constructor() {
        this.CardSet = emumToArray(CardSet);
        this.Race = emumToArray(Race);
        this.Rarity = emumToArray(Rarity);
        this.CardClass = emumToArray(CardClass);
       this.CardType = emumToArray(CardType); 
    }

    ngOnInit() { }
}

function emumToArray(e:any) {
    var names: any[] = [];
    for (var n in e) {
        if (typeof e[n] === 'number') names.push({name:n,value:e[n]});
    }
    return names;
}