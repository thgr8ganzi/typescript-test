import Person, { makePerson} from "./person/Person";
import IPerson from "./person/IPerson";
import Chance from "chance";
import * as R from "ramda"

const chance = new Chance()
let persons : IPerson[] = R.range(0, 2)
.map((n:number)=> new Person(chance.name(), chance.age()))

let ai : {
    name : string,
    age : number,
    etc? : boolean
} = {name : 'Jack', age : 32}
function printMe(me:{name:string,age:number,etc?:boolean}){
    console.log(
        me.etc ? `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`
    )
}
printMe(ai);