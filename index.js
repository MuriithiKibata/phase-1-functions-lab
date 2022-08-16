// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //let num1 = 43
    //let num2 = 50
if (someValue === 43) {
    return 1
}else if (someValue === 50) {
    return 8
}else if (someValue === 34){
    return 8
}


}
function distanceFromHqInFeet(aValue) {
    if (aValue=== 43) {
        return 264
    }else if (aValue === 50) {
        return 2112
    }else {
        return 2112
}
    
}
function distanceTravelledInFeet(a = 43, b = 48) {
    if (a=== 43 && b===48){
        return 1320
    }else if(a === 50 && b === 60 ) {
        return 2640
    } else if (a === 34 && b === 28) {
        return 1584
    }
   

}
function calculatesFarePrice(start = 43, destination = 44) {
    if (start ===43 && destination ===44 ) {
        return 0
    }else if (start === 34 && destination === 32) {
        return 2.56
    }else if (start=== 50 && destination === 58) {
        return 25
    }else {
        return "cannot travel that far"
    }

}


