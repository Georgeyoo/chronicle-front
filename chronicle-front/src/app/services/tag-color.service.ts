import { Injectable } from '@angular/core';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagColorService {

  constructor() { }

  public getColorStringFromTag(tag : Tag) : any {


    if (tag.name == "Technology")
    return {
      "background-color": "blue"
    }
    else
    return {
      "background-color": "red"
    }
  }


}
