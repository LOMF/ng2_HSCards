import { Component, OnInit,DoCheck, KeyValueDiffers,Input,ChangeDetectionStrategy,EventEmitter,Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../../types/card.interface';
import { CardService } from '../../services/card.service';
import { FilterPipe } from '../../Filter.pipe'

@Component({
    selector: 'card-list',
    providers:[CardService],
    directives:[CardComponent],
    templateUrl: './app/parts/cardList/cardList.component.html',
    styleUrls:['./app/parts/cardList/cardList.component.css'],
    inputs:['filter','selectedCard'],
    pipes:[FilterPipe],
    changeDetection: ChangeDetectionStrategy.onPush,
    events:['cardSelected']
})
export class CardListComponent implements OnInit,DoCheck {
    @Input filter:any;
    @Output cardSelected = new EventEmitter();
    @Input selectedCard:any;
    differ:any
    constructor(public cardService: CardService,private differs: KeyValueDiffers) {
        
        this.differ = differs.find({}).create(null);
        
     }
    cards:Card[];
    errorMessage:string;
    selectCard(cardInfo:Card, el) {
       
      //  this.selectedCard = cardInfo;
        this.cardSelected.emit(cardInfo);
        
    }
    ngOnInit() { 
        this.cardService.getCards().subscribe(cards => this.cards = cards, 
                                            error => this.errorMessage = error);
    

    }
    ngDoCheck() {
		var changes = this.differ.diff(this.filter);

		if(changes) {
			console.log('changes detected');
			changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
			changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
			changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
           
		} else {
			console.log('nothing changed');
		}
	}
}