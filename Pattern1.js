/* 
Output displayed
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/
function pattern(n){
    for(let i = 1; i < n; i++){
        let str = '';
        for (let j =1; j <= i; j++){
            str= str + i;
        }
    console.log(str);
    }
}

pattern(10); 

