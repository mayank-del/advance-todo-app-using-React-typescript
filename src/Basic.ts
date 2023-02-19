import React from 'react'

function Basic() {
    let dob:any;//any type means you can give any datatype,but it is not recomended.
  let ctc:unknown;//unknown type also means you can give any datatype,it is recomended.
  let name:string;
  let ag:number;
  let experience:number | string;// | is symbol for union,it means that here you can choose both string or number  
  let isStudent:boolean;
  let hobbies:string[];//array of string ,similarly define array of number
  let role:[number,string]// it is tuple datatype , it contain one number, one string
  role=[5,"eddy"]

  experience=6;
  experience="five yrs";

  //for objects

//type are types of alias ,alias is of two type-: (i) type ,(ii) alias 
  type Person={
    name:string,
    age:number,
    wifename?:string// we can add question mark to make this property optional
  };
  // one type can extends another type property like this-
  type PersonData=Person &{
    adhar:number
  };

  let person:Person={
    name:"mike",
    age:78,
  };

  let arr:Person[]//similarly, we can create array of person object.
  name="ram"

  //type of alias in ts
  interface student{
    name:string,
    age:number,
    wifename?:string// we can add question mark to make this property optional
  };
  // one interface can extends another interface property like this-
  interface studData extends student{
    roll:number
  }

  /* Function declaration in typesript */

  // 1. type 1:
  let printName:Function;

  //2. type 2:
  let printName2:(name:string)=>void;// void is return type which return undefined, and name is parameter of type string
  let printName3:(name:string)=>never;// nevrer will not return anything  
  return (
    name
  )
}
export default Basic
