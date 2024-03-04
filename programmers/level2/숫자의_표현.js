function solution(n) {
    var answer = 0;
    var tmp = 0;
    var a = 0;
    
    for(let i = 1; n - tmp >= 1; i++){
        a = (n-tmp)/i;
        if(Number.isInteger(a) === true){
            answer++;
        }
        tmp = tmp + i
    }
    return answer;
}