function solution(today, terms, privacies) {
    var answer = [];
    
    let tmpArr = today.split('.');
    year = parseInt(tmpArr[0]);
    month = parseInt(tmpArr[1]);
    day = parseInt(tmpArr[2]);

    let termName = [];
    let termMonth = [];
    let tmp = 0;
    let tmpYear = 0;
    let tmpMonth = 0;
    let tmpDay = 0;
    
    for(let i = 0; i < terms.length; i++){
        termName.push(terms[i].substr(0, 1));
        termMonth.push(terms[i].substr(1));
    }
    
    for(let i = 0; i < privacies.length; i++){
        tmp = termName.indexOf(privacies[i].substr(-1));
        tmpYear = parseInt(privacies[i].substr(0,4));
        tmpMonth = parseInt(privacies[i].substr(5,2)) + parseInt(termMonth[tmp]);
        tmpDay = parseInt(privacies[i].substr(8,2));
        
        while(tmpMonth > 12){
            tmpMonth = tmpMonth - 12;
            tmpYear++;    
        }
        
        if(tmpYear < year){
            answer.push(i+1);
        }
        else if(tmpYear === year){
            if(tmpMonth < month){
                answer.push(i+1);
            }
            else if(tmpMonth === month){
                if(tmpDay <= day){
                    answer.push(i+1);
                }
                else{
                    continue;
                }
            }
            else{
                continue;
            }
        }
        else{
            continue;
        }
    }
    return answer;
}