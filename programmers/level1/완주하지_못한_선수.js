function solution(participant, completion) {
    var answer = '';
    
    var result = participant.reduce((acc,c) => {
        acc[c] = acc[c] ? ++acc[c] : 1;
        return acc;
    },{});
    
    completion.forEach((c) => {
        if(result[c]){
            result[c] = result[c] - 1;
            if(result[c] === 0){
                delete result[c];
            }
        };
    },{});
    
    participant.forEach((c) => {
        if(result[c]){
            answer = c;
        }
    });
    
    return answer;
}