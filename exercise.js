function addNum (num,num2){
    for(i=num; i<=12; i++){
        for(k=num2; k<=12; k++){
          var sum = i+k;
          console.log(i+'+'+k+' = '+sum);
        }
    }
}
function subNum (num,num2){
    for(i=num; i<=12; i++){
        for(k=num2; k<=12; k++){
          var diff = i-k;
          console.log(i+'-'+k+' = '+diff);
        }
    }
}
function multNum (num,num2){
    for(i=num; i<=12; i++){
        for(k=num2; k<=12; k++){
          var prod = i*k;
          console.log(i+' * '+k+' = '+prod);
        }
    }
}

function divNum (num,num2){
    for(i=num; i<=12; i++){
        for(k=num2; k<=12; k++){
          var quot = (i/k).toFixed(2);
          console.log(i+' / '+k+' = '+quot);
        }
    }
}
var mathFuncs=[addNum , subNum, multNum, divNum];

function execute(func, param1, param2){
  func(param1,param2)
  
}

mathFuncs.forEach(function (func){
  execute(func, 3,5)
});