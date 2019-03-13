 function multiple(n, callback){
 return callback;
 }
 for(i=1;i<=10;++i)
 {
    function tables(n){
    return n*i;
 }
 multiple(2,tables);
 console.log(tables(2));
 }