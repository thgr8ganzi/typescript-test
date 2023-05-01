import Person, { makePerson} from "./person/Person";
// import IPerson from "./person/IPerson";
import Chance from "chance";
import * as R from "ramda"
import {arrayLength,isEmpty} from "./etc/arrayLength";

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
// let add = new Function('a','b','return a+b')
// function add(a:number,b:number):number{
//     return a + b;
// }
// let add = (a:number,b:number):number => {
//     return a + b;
// }
// console.log(add(1,2))
// const isGreater = (a:number,b:number):boolean => a>b;
// console.log(isGreater(4,2))
let numArray:number[] = [1,2,3]
let strArray:string[] = ['Hello','World']

type IPerson = {name:string,age?:number}
let personArray:IPerson[] = [{name:'Jack'},{name:'Jane',age:32}]

console.log(
    arrayLength(numArray),
    arrayLength(strArray),
    arrayLength(personArray),
    isEmpty([]),
    isEmpty([1])
)