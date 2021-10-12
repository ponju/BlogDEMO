import { ScullyRoute } from "@scullyio/ng-lib";
import * as moment from "moment";
import { Moment } from "moment";

export interface Postable{
  title:string
  summery:string|undefined;
  published:boolean
  thumbnail: string | undefined;
  date:string|undefined;
  moment:moment.Moment|undefined
  order?: number | undefined;
  category?: string[] | undefined;
  series?: string | undefined;
  path:string|undefined;
}

export class Post implements Postable {
  private _moment?:Moment;
  constructor(private route:ScullyRoute) {    
  }
  get title():string{
    return this.route.title==undefined?"No Title":this.route.title;
  }
  get summery(): string | undefined{
    return this.route.summery;
  }
  get path():string|undefined{
    return this.route.route;
  }
  get date():string|undefined{
    return this.route.date;
  }
  get published(): boolean{
    return this.route.published==undefined?false:this.route.published;
  }
  get thumbnail(): string | undefined{
    return this.route.thumbnail
  }
  get order(): number | undefined{
    return this.route.order;
  }
  get category():string[]|undefined{
    return this.route.category;
  }
  get series():string | undefined{
    return this.route.series
  }
  get moment():moment.Moment|undefined {
    if (this._moment!=undefined) {
      return this._moment;
    }
    else if (this.route.date != undefined) {
      this._moment = moment(this.route.date)
      return this._moment;
    }
    return undefined;
  }
    
  static Compare(a: Postable, b: Postable) {
    if (a.series != undefined && b.series != undefined && a.series == b.series) {
      if (a.order != undefined && b.order != undefined) {
        return a.order - b.order
      }
    }
    let aMoment = a.moment;
    let bMmoment = b.moment;

    if (aMoment == undefined && bMmoment == undefined) {
      return 0;
    } else if (aMoment == undefined) {
      return -1;
    } else if (bMmoment == undefined) {
      return 1;
    } else {
      return aMoment.isBefore(bMmoment)?1:(aMoment.isAfter(bMmoment)?-1:0);
    }

  }
}

export const OUTPUT_FORMAT = "yyyy-MM-DD HH:mm";


