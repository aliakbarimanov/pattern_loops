let result = "";
let n = 10;

for(let row=1; row<=n; row++){
    
    for(column=1; column<=n; column++){
        
        if(row==1 || row==n || column==1 || column==n){
            result += "*";
        }else{
            result += "&nbsp";
        }
    }

    result += "</br>";
}

document.write(result);