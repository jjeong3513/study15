const fnc1 = function(data){
    const result3 = data * data; // 10 * 10 = 100
    return result3; 
    //Math.pow => ** (거듭제곱)
}

const fnc2 = function(data,fnc){ //20 fnc1
    const result2 = data / 2;
    return fnc(result2) //fnc1(10)
}

const fnc3 = function(data,fnc){ //4 fnc2 입력
    const result1 = data * 5;  
    return fnc(result1, fnc1) //fnc2(20, fnc1)
}

let finalResult = fnc3(4, fnc2)


console.log(finalResult) //100

/*
fnc3 실행시켜라 그 뒤에 fnc2 호출 fnc1 호출 
*/

