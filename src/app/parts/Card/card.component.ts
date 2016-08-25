import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'card-item',
    templateUrl: './app/parts/card/card.component.html',
    styleUrls: ['./app/parts/card/card.component.css'],
    
    inputs:['card','selected']
})
export class CardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}