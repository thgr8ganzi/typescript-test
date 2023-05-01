import {init} from "./init";

init(()=>console.log('custom'))

const multiply = a => b => c => a * b * c;

export type Person = {name:string, age:number}

export const makePerson = (name:string, age:number = 10):Person => {
    const Person = {name : name, age : age}
    return Person
}
const makeObject = (key:string,value:string)=>({[key]:value})