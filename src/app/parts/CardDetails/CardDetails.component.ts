import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Card } from '../../types/card.interface';

@Component({
    
    selector: 'card-details',
    templateUrl: './app/parts/CardDetails/CardDetails.component.html',
    styleUrls: ['./app/parts/CardDetails/CardDetails.component.css'],
    inputs:['card'],
    events:['closeDetails'] 
}) 
export class CardDetailsComponent implements OnInit {
    @Output closeDetails = new EventEmitter();
    constructor() { }



    ngOnInit() { }
}