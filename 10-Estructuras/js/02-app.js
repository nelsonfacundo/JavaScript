const puntaje = 1001;
const puntaje2 = 1000;


if(puntaje != 1000){ // != diferente == igual A 
    console.log("Si es diferente ");
}

if(puntaje2 == "1000"){  // Operador no estricto 
    console.log("Si es igual ");
}

if(puntaje2 === "1000"){  // Operador estricto "==="
    console.log("Si es igual ");
}else{
    console.log("No es igual ");
}

if(puntaje2 !== "1000"){  // Operador estricto "==="
    console.log("Si es diferente ");
}else{
    console.log("No es diferente ");
}
