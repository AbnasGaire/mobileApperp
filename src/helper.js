
export function Time(time){
    let a=time.split(":");
    return a[0]+":"+a[1];
}
export function TimeinModulation(timeValue){
    let time=timeValue.split(":");
    let returnTime="";
    if(time[0]>12){
        time[0]=time[0]-12;
        returnTime=time[0]+':'+time[1]+' PM';
    }
    else{
        if(time[0]=="00"){
            returnTime=12+":"+time[1]+' AM';
        }else{
            returnTime=time[0]+":"+time[1]+' AM';
        }
    }
    return returnTime;

}

export function AvatarName(name){
    let short=[];
    let a = name.split(" ");
    for(var i =0; i<a.length; i++){
        short.push(a[i].charAt(0, 1));
    }
    return short;
}
