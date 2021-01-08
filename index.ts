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