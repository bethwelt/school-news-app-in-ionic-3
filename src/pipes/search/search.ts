import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'search',

})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   //first_name:any='';
  transform(items: any[], terms: string): any[] {
  if(!items) return [];
  if(!terms) return items;
  terms = terms.toLowerCase();
  return items.filter( it => {
  if(it.title){
    return it.title.toLowerCase().includes(terms); // only filter country name
  }
   else if(it.first_name){
    return it.first_name.toLowerCase().includes(terms); // only filter country name
  }
   else if(it.name){
    return it.name.toLowerCase().includes(terms); // only filter country name
  }

});
}
}
