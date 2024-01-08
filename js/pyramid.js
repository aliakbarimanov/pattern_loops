let result = "";

for(let i=0; i<=5; i++){
    for(let j=0; j<=5-i; j++){
        document.write("&nbsp");
    }

    for(let k=0; k<=i; k++){
        document.write("*");
    }
    document.write("<br>");
}

document.write(result);