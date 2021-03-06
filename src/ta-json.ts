import { serialize } from "./methods/serialize";
import { deserialize } from "./methods/deserialize";
import { IParseOptions } from "./types";

export class TaJson {
    public static deserialize<T>(object:any, type?:Function, options?:IParseOptions):T {
        return deserialize(object, type, options);
    }

    public static parse<T>(json:string, type?:Function, options?:IParseOptions):T {
        return this.deserialize<T>(JSON.parse(json), type, options);
    }

    public static serialize(value:any, type?:Function):any {
        return serialize(value, type);
    }

    public static stringify(object:any, type?:Function):string {
        return JSON.stringify(this.serialize(object, type));
    }
}
