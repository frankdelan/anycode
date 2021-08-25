let limit = 0, test = false;
while(test == false){
    let difficult = prompt("Choose a game difficult! 1 - easy , 2 - medium, 3 - hard");
    if (difficult == 1) {
        limit = 50;
        test = true;
    } else if (difficult == 2) {
        limit = 30;
        test = true;
    } else if(difficult == 3 ){
        limit = 10;
        test = true;
    } else {
        alert("Incorrect input, try again!")
    }
    
}
alert("You have " + limit + " clicks");

let clicks = 0;
let getPlace = function (size) {
    return Math.floor(Math.random() * size );
}

let width = 800;
let height = 600;

let target = {
    x : getPlace(width),
    y : getPlace(height)
}

let getDistance = function (event,target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(Math.pow(diffX,2) + Math.pow(diffY,2));
}

let getDistanceToTarget = function (distance) {
    if (distance < 50) {
        return "So close!";
    }else if (distance < 80) {
        return ("Heat! "+ (limit - clicks) + " clicks remaining");
    }else if (distance < 120) {
        return "Hot!";
    }else if (distance < 180) {
        return "Warmly!";
    }else if (distance < 280) {
        return "Coldly";
    }else if (distance < 400) {
        return ("Icily. "+ (limit - clicks) + " clicks remaining");
    }else {
        return "Freeze";
    }
}
$("#map").click(function (event) {
    clicks++;
    if (clicks == limit) {
        alert("Game over, you are lose!");
        location.reload();
    }
    let distance = getDistance(event,target);

    let distanceToTarget = getDistanceToTarget(distance);

    $("#distance").text(distanceToTarget);

    if(distance < 30){
        alert("Treasure has been found! You used " + clicks + " clicks");
    }
})


