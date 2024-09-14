def solution(video_len, pos, op_start, op_end, commands):
    second = pos_to_second(pos)
    op_start_sec = pos_to_second(op_start)
    op_end_sec = pos_to_second(op_end)
    video_len_sec = pos_to_second(video_len)
    
    for func in commands:
        #오프닝 건너뛰기 확인
        if(second < op_end_sec and op_start_sec <= second):
            second = op_end_sec
            
        if func == "prev":
            second = click_prev(second)
        else:
            second = click_next(video_len_sec, second)
            
    #오프닝 건너뛰기 확인
    if(second < op_end_sec and op_start_sec <= second):
        second = op_end_sec
    
    answer = second_to_pos(second)
    return answer

def pos_to_second(pos):
    list_pos = pos.split(':')
    second = int(list_pos[0]) * 60 + int(list_pos[1])
    
    return second

def second_to_pos(second):
    minute = second // 60
    second = second % 60
    
    if(minute < 10):
        minuteStr = "0" + str(minute)
    else:
        minuteStr = str(minute)
    
    if(second < 10):
        secondStr = "0" + str(second)
    else:
        secondStr = str(second)
    
    return minuteStr + ":" + secondStr


def click_prev(second):
    #prev 기능 수행
    second = second - 10
    
    if(second < 10):
        return 0
    else:
        return second

def click_next(video_len_sec, second):
    
    #prev 기능 수행
    second = second + 10
    
    if(video_len_sec - second < 10):
        return video_len_sec
    else:
        return second