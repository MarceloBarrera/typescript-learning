import _ from 'lodash';
import $ from 'jquery';

console.log(_.uniq([1,2,1]));

_.camelCase("pepe")
const arr = [ 4, "Pete", 8, "John" ];
$.inArray("Pete", arr)
///////////////////////////////////////////////////

type Salutation={greeting:string, name:string};

function greet({greeting,name}:Salutation){
    return `${greeting}, ${name}`;
}

const messaage:string = greet({greeting:"hi",name:"pepe"})

//playing with typescript to see errors, trying parameters, optional parameters, destructuring objects, etc.

const input = document.getElementById("input") as HTMLInputElement;
input.autofocus = true;

input.addEventListener("input", event => {
    const inp = event.currentTarget as HTMLInputElement;
    console.log(inp.value);
    //console.log(event.currentTarget.value)
})

//example function utility using Generics
// fill<T> means that the function fill is expecting T as data type entry
// so then value:T can be used
//funtion return T[]
// T is another way to say I don´t know
function fill<T>(array:any[], value:T):T[]{
    return array.map(()=>value);
}

const result = fill([1,"d",0], "pepe");
result.map( x => x.toUpperCase())

const values = fill([1,2,3], 3); 
values.map(x=>x / 2)

// another example Reverse function

function reverse<T>(items:T[]): T[] {
    return items.slice().reverse();
}

const objects = [{name:'pepe'}, {name:'foo'}];
const reversed = reverse(objects);
reversed.push({name:'a'})

// the cool thing about this is that you could not "push" an object {nana: 'a'} cause "nana" will be warn by TypeScript

let value: any;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK
value = Symbol("type");   // OK

// let value: any;

value.foo.bar;  // OK
value.trim();   // OK
value();        // OK
new value();    // OK
value[0][1];    // OK

//////

let valueFoo: unknown;

valueFoo = true;             // OK
valueFoo = 42;               // OK
valueFoo = "Hello World";    // OK
valueFoo = [];               // OK
valueFoo = {};               // OK
valueFoo = Math.random;      // OK
valueFoo = null;             // OK
valueFoo = undefined;        // OK
valueFoo = new TypeError();  // OK
valueFoo = Symbol("type");   // OK

// let value: unknown;

let value1: unknown = valueFoo;   // OK
let value2: any = valueFoo;       // OK
let value3: boolean = valueFoo;   // Error
let value4: number = valueFoo;    // Error
let value5: string = valueFoo;    // Error
let value6: object = valueFoo;    // Error
let value7: any[] = valueFoo;     // Error
let value8: Function = valueFoo;  // Error