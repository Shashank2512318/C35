const database= firebase.database();

var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    var Page_no=database.ref('Ball/position');
    Page_no.on("value",readDB)


}

function readDB(data){
ballposition=data.val()
console.log(ballposition)
ball.x=ballposition.x;
ball.y=ballposition.y;

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    var Pageno= database.ref('Ball/position');
    Pageno.set({
        x:ball.x,
        y:ball.y
    })
}
