interface Starks {
    name : string;
    age?: number;
}

function printName(stark : Starks){
    console.log(stark.name);
}

printName({name:"Eddard"});
printName({name:"Jhon"});
