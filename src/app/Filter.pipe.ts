import { Pipe, PipeTransform } from '@angular/core'
import { Card } from './types/card.interface';

@Pipe({
    name: 'filter'
    ,pure:false
})

export class FilterPipe implements PipeTransform {
    transform(cards: Card[], fo): any {
        if (cards) {

        return cards.filter((eachItem:Card) => {
            if (eachItem.type === 'ENCHANTMENT') return false;
            var isMatch = true;
            for (let key in fo) {
                isMatch = isMatch && (!fo[key] || (eachItem[key] && eachItem[key].toLowerCase().includes(fo[key].toLowerCase())));
            }
            return isMatch;
        });
        }
    }
}