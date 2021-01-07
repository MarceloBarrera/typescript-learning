type Salutation={greeting:string, name:string};

function greet({greeting,name}:Salutation){
    return `${greeting}, ${name}`;
}

const messaage:string = greet({greeting:"hi",name:"pepe"})

//playing with typescript to see errors, trying parameters, optional parameters, destructuring objects, etc.