import { ScullyRoute } from "@scullyio/ng-lib";
import { Moment } from 'moment'
import * as moment from 'moment'

export interface Postable extends ScullyRoute {
    seriese:string|undefined
    order:number|undefined
    category: string|string[] | undefined
    tag: string | string[] | undefined
    date: string | undefined
    moment: Moment | undefined
}

export class Post implements Postable {
    [prop: string]: any;
    seriese:string|undefined;
    order:number|undefined
    category: string |string[]| undefined;
    tag: string | string[] | undefined;
    date: string | undefined
    private _moment!: Moment;
    route!: string;
    title?: string | undefined;
    slugs?: string[] | undefined;
    published?: boolean | undefined;
    slug?: string | undefined;
    sourceFile?: string | undefined;
    lang?: string | undefined;

    get moment() {
        if (this._moment != undefined) {
            return this._moment
        } else if (this.date != undefined) {
            this._moment = moment(this.date)
            return this._moment
        }
        return undefined;
    }

    static Compare(a:Postable,b:Postable):number{
        if(a.seriese!=undefined && a.seriese==b.seriese){
            if(a.order!=undefined&&b.order!=undefined){
                return a.order-b.order;
            }else{
                if(a.moment==undefined && b.moment==undefined){
                    return 0;
                }else if(a.moment==undefined){
                    return -1;
                }else if(b.moment==undefined){
                    return 1;
                }else{
                    return a.moment.isBefore(b.moment)?(a.moment.isSame(b.moment)?0:-1):1;
                }
            }
        }else{
            return 0;
        }
    }
}