//Visualizing Uncertainty
//Doug , Xingwei , Sara


//position of the states  only 15 right now
var xpos= [100,150,200,250,300,350,350,400,450,500,550,600,650,700,800];
var ypos= [500,500,500,500,500,500,500,500,500,500,500,500,500,500,500];

//menu
var mxpos = [1200,1200,1200,1200,1200,1200,1200,1200];
var mypos = [40,70,100,130,160,190,220,250];
var cmenu = ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4']; 


var adjxby = 0;
var adjyby = 0;

var offsetx =0;
var offsety =0;

var xdiff = 0;
var ydiff = 0;

var xadj=[35,0,30,30,50,40,50,-110,-250,-220,-200,-170,-180,-140,-80];
var yadj=[60,60,60,60,40,20,0,-54,-50,-10,20,40,60,60,60];

var states = [];
var menuitems = [];

//appstate 1 = intro  2 = regular
var appstate = 1;
var mobilestate = 0;
var mobile = false;
var mobileinitial = false;
var mobileheight = 150;
var mobilewidth = 375;

//firstdraw  1 = first  0 = regular
var firstdraw = 1;
var fr = 30;

//firstdraw  1 = first  0 = regular
var menuchoice = 8;

function preload() {
  //img = loadImage('m1.jpg');
  
  introbackground = loadImage('../images/introbackground.png');
  introbackground_mob = loadImage('../images/introbackground.png');
  introbackground = loadImage('../images/introbackground.png');
  introimg = loadImage('../images/legend.png');

  //change font here
  //fontRegular = loadFont('filename.otf');

  //READ IN DATA HERE
  //sumtable can be the poll datao
  sumtable = loadTable("../data/pollingdata.csv", "csv");

  //detaildata can be the result of the diceroll data (for now:
  detailtable = loadTable("../data/pollingdata.csv", "csv",'header');
}

//mobile

var canvas;
//this gets called only once in the very beginning


function setup() {
  // Sets the screen to be x pixels wide and y pixels high
  //mobile

  if (window.innerWidth < 400) 
  {
     mobileinitial=true;
     xcanvas = mobilewidth;
     ycanvas = 667;
     createCanvas(xcanvas, ycanvas);
  }
  else
  {
     mobileinitial=false;
     xcanvas = 1400;
     ycanvas = 800;
     createCanvas(xcanvas, ycanvas);
  }

  colorMode(HSB, 360, 100, 100);
  //textFont(fontRegular);
  text('Font Style Normal', 50, 300);

  var xcanvas = 1200;
  var ycanvas = 800;
  var radius = 312;  
  var h=xcanvas/2;
  var k=ycanvas/2;
  //frameRate(fr);
}


function mouseClicked() {
   switch (appstate) {
    case 1:
     print('Made it to mouseclick case 1' + fr);
     print('appstate ' + appstate);
     createMysteries();
     //menu
     createMenus();
     if (mobile==true)
      {
      appstate=2;
      }
     else 
      {
      appstate=2;
      }
     print('c1 appstate ' + appstate);
     break;
    case 2:
     if (mobile==true)
      {
      mobilestate=0;
      print('c2: mobilestate  ' + mobilestate);
      adjxby = mobilewidth/2 - xpos[mobilestate]
      print('c2: adjxby ' + adjxby);
     adjyby = 100 - ypos[mobilestate]
      appstate=5;
      }
     else 
      {
      appstate=3;
      }
     print('c2 appstate ' + appstate);
     print('c2 Made it to mouseclick case 2' + fr);
     //createMysteries();
     break;
    case 3:
     print('Made it to mouseclick case 3' + fr);
     if (mobile==true)
      {
      appstate=5;
      }
     else 
      {
      appstate=3;
      }
     print('c3 appstate ' + appstate);
     print('c3 Made it to mouseclick case 3' + fr);
     //createMysteries();
     print('c3 appstate ' + appstate);
     //appstate++;
     break;
    case 4:
     print('Made it to mouseclick case 4' + fr);
     if (mobile==true)
      {
      appstate++;
      }
     else 
      {
      appstate=3;
      }
     frameRate(60);
     //scale(2);
     //adjxby = map(xpos[mobilestate],0,1400,0,375) - xpos[mobilestate];
     //adjyby = map(ypos[mobilestate],0,800,0,mobileheight) - ypos[mobilestate];
     print('c4: appstate ' + appstate);
     print('c4: mobilestate  ' + mobilestate);
     print('c4: mobilewidth/2 ' + mobilewidth/2);
     print('c4: xpos[mobilestate ' + xpos[mobilestate]);
     adjxby = mobilewidth/2 - xpos[mobilestate]
     adjyby = 100 - ypos[mobilestate]
     break;
     //createMysteries();
    case 5:
     //mobilestate++;
     print('c5: appstate ' + appstate);
     print('c5: mobilestate  ' + mobilestate);
     print('c5: mobilewidth/2 ' + mobilewidth/2);
     print('c5: xpos[mobilestate ' + xpos[mobilestate]);
     adjxby = mobilewidth/2 - xpos[mobilestate]
     print('c5: adjxby ' + adjxby);
     adjyby = 100 - ypos[mobilestate]
     if (mobile==true)
      {
      //mobilestate=0;
      appstate++;
      print('c5: appstate ' + appstate);
      }
     else 
      {
      appstate=3;
      }
     //appstate++;
     print('c5: mobilestate  ' + mobilestate);
     break;
    case 6:
   //{
     //translate(0,0);

     print('c>5: appstate ' + appstate);
     print('c>5: mobilestate  ' + mobilestate);
     print('c>5: mobilewidth/2 ' + mobilewidth/2);
     print('c>5: xpos[mobilestate ' + xpos[mobilestate]);

     if (mobilestate > 14 || mobilestate==0) {
      mobilestate=0;
      appstate=6;
     adjxby = mobilewidth/2 - xpos[mobilestate]
     adjyby = 100 - ypos[mobilestate]
       }
     else {
          print('c6: mobilestate  ' + mobilestate);
          adjxby = mobilewidth/2 - xpos[mobilestate];
          print('c6: adjxby ' + adjxby);
          adjyby = 100 - ypos[mobilestate];
          }
     print('c>5: appstate ' + appstate);
     print('c>5: mobilestate ' + mobilestate);
   //}
     mobilestate++;
     break;
    default:
     print('appstate ' + appstate);
     }
}

//menu
function mouseReleased() {
  for(let i=0 ; i<menuitems.length; i++){
    menuitems[i].setChoice();
  }
  for(let x=0; x<states.length; x++){
    states[x].openLink();
  }
}


//menu
function createMenus(){
for (var m = 1 ; m < 9 ; m++)
  {
  menuitems.push(new Menu(m));
  }
}


function createMysteries() {
//Main circle code for states
//summary table is to get count of all objects for all states
var rowCounter=sumtable.getRowCount();
var rowCounterMax=sumtable.getRowCount();
var candidate_A_poll_amt = 0;
var maxRow = 20;
var curcount=0;
var curcountmap=0;
//if (sumtable.getRowCount() < 20) maxRow = sumtable.getRowCount();
if (sumtable.getRowCount() < 20) maxRow = 15;
//loop through summary
for (var r = 1; r < 16 ; r++){
curcount = int(sumtable.getString (r,3));
curcountmap = map(curcount, 0, 711,1,80);
intensity_curcountmap = map(curcount, 0, 711,70,90);
//fishies.push(new Fish(x, y, diameter, speed, color,opacity, label, objectID, isHighlight));
states.push(new State(r,intensity_curcountmap,curcountmap,curcount));
}

}

function createTickers(state, roll) {
//this is the code to create the century "ticker line"
radius = 20
let ct =  0;

//let rows = detailtable.findRows(1, 'State');
//let rows = detailtable.findRows('Default', 'Category');

let rows = detailtable.findRows(state.toString(), 'State');
//print(detailtable);
//print('rows.length=' + rows.length);
//print('state=' + state);

switch(roll){
   case 1: 
   stroke(0,0,0);
   break;
   default:
   stroke(60,100,100);
   break;
}
strokeWeight(2);

for (let i = 0; i < rows.length; i++) {
    //print(rows[i].getString('name') + ': ' + rows[i].getString('type'));
   candidate_A_poll_amt = int(rows[i].getString('Count'));
   //candidate_A_poll_amt = int(detailtable.getString (d,4));
   century  = int(rows[i].getString('Century'));
   //century  = int(detailtable.getString (d,3));
   //state  = int(detailtable.getString (d,2));
   ct = map(century,0,2000,0, TWO_PI) - HALF_PI;
   lengthcnt = map(candidate_A_poll_amt, 1, 204, 8, 75);
   line(xpos[state-1] + cos(ct) * radius, ypos[state-1] + sin(ct) * radius , xpos[state-1] + cos(ct) * lengthcnt, ypos[state-1] + sin(ct) * lengthcnt);
  }
strokeWeight(0);
}

function draw() {
//handle shift
//adjxby is the total amount to be shifted
//offsetx is the incremental movement
if (appstate==6)
    {
        //print('D6 appstate=' + appstate);
        //print('D6 Mobilestate ' + mobilestate);
 
       fill(46, 67, 64);
       circle(300,600,40);
       textStyle(ITALIC);
       textSize(28);
       fill(0,0,0);
       text ('Back',265,610);
       textStyle(NORMAL);

    if (mobilestate > 0) 
        { 
        //do mobile stuff 
       }
       
    }
//if (appstate==5 || appstate==6) 
if (appstate==6 || appstate==5) 
    {
     if (mobilestate==0)
        {
         offsetx = adjxby;
         offsety = adjyby;
         translate(offsetx, offsety);
        }

    }

//translate 

var radius = 40;  
background(0,20,20);

switch(appstate){
   case 1:
   //this is the intro screen
    tint(40,20,20);
    if (mobileinitial==true || mobile==true)
       {
      //do a mobile image
     //image(background_mob,1,1,375,667);
       }
    else {
    image(introbackground,1,1,1400,800);//1400 800
    noTint();
    image(introimg,150,120,632/1.5,870/1.5);
        }

    textStyle(NORMAL);
    textFont("Perpetua");
    fill(20, 100, 100);

    if (mobile==true) 
       {
       //do mobile stuff
       }
       else 
       {
       textSize(60);
       text ('Elections',40,60);
       text ('& Uncertainty',40,110);
    fill(1,0,87);
    textSize(20);
    let xset = 570;
    let yset = 180;
    let ysp = 19;
    text ('This is a bunch of text.',xset,yset+ysp*1);
    text ('this is another line.',xset,yset+ysp*2);
    text ('and another.',xset,yset+ysp*3);
    textStyle(ITALIC);
    text ('Some italics text.',xset,yset+ysp*22);
    textSize(14);
    text ('Click anywhere to continue',xset+600,yset+ysp*26);
    textStyle(NORMAL);
     }
    textStyle(NORMAL);
    break;
    case 2:
    //this is the second intro screen
    if (mobile==true) 
      {
      noTint();
      image(introimg,-19,10,632/1.5,870/1.5);
    fill(1,0,87);
    textSize(13);
    let xset = 70;
    let yset = 80;
    let ysp = 13;
    textStyle(NORMAL);
    text ('This is text for mobile:',xset,yset+ysp*1);
    text ('Continue',255,610);
    textStyle(NORMAL);
      }

     else {
    let xset2 = 570;
    let yset2 = 180;
    let ysp2 = 19;
    fill(60,100,100);
    textSize(12);
    textFont("Perpetua");
    text ('START',640,625);
    textSize(18);
    text ('Click anywhere to continue',xset2+100,yset2+ysp2*26);
    textStyle(NORMAL);
    states[0].show();
         }
    break;
   default:
   for (let i = 0; i < states.length; i++) {
       states[i].show();
       states[i].rollover(mouseX, mouseY);
   }
   //display menu
   for (let m = 0; m < 8 ; m++) {
       menuitems[m].show();
       menuitems[m].rollover(mouseX, mouseY);
   }

}


fill(60);
textSize(10);
if (window.innerWidth < 400) 
{
   mobile=true;
}
else
{
   mobile=false;
}
var debuglx = 350;
var debugly = 500;

}


//this is the class for the Menu Option
class Menu {
     constructor(choice){
     this.x=mxpos[choice-1];
     this.y=mypos[choice-1];
     this.over = false; 
     this.choice = choice;
     if (choice===menuchoice){
     this.menuchoice = true;
      }
     else
        {
     this.menuchoice = false;
        }
     }

     show() {
     //text 
     if(this.over){
     //print('choice = ' + this.choice + ' and this.over=' +this.over);
     //print('call highlighting menu');
     textStyle(BOLD);
     fill(60, 100, 100);
     textSize(20);
     text (cmenu[this.choice-1], mxpos[this.choice-1], mypos[this.choice-1]);
     textStyle(NORMAL);
      }
     else if (this.menuchoice===false){
     fill(1, 0, 87);
     textSize(20);
     text (cmenu[this.choice-1], mxpos[this.choice-1], mypos[this.choice-1]);
      }

     //current menu choice
     if(this.menuchoice){
     //circle(400,400,50);
     textStyle(BOLD);
     fill(20, 100, 100);
     textSize(20);
     text (cmenu[this.choice-1], mxpos[this.choice-1], mypos[this.choice-1]);
     textStyle(NORMAL);
      }

     }

     rollover(px, py) {
     px=px+adjxby*(-1);
     py=py+adjyby*(-1);
     let d = dist(px, py, this.x, this.y);
     //print('menu choice=' + this.choice + 'd=' + d);
     this.over = d < 25;
     }

     setChoice(){
     //fill(50,50,50);
     //circle(400,400,950);
     //this.menuchoice=true;
     //menuchoice=this.choice;
    if(this.over){
     //circle(400,400,50);
     print("Called setCHoice choice=" +this.choice);
     fill(60, 100, 87);
     textSize(20);
     text (cmenu[this.choice-1], mxpos[this.choice-1], mypos[this.choice-1]);
     this.menuchoice=true;
      //window.open(base_url + this.objectID, "_blank");
    }
    else {
     this.menuchoice=false;
    }
    }

}//end class Menu

class State {
       //x:0,
       //pass in state number. later we will pass in choice, material)
       //constructor(state,intensity_curcountmap, curcountmap, candidate_A_poll_amt_p) {
       constructor(state) {
       //this.x = xpos[state+1],
       this.x = xpos[state-1],
       this.y = ypos[state-1],

       //this.intensity_curcountmap = intensity_curcountmap;
       //this.curcountmap = curcountmap;
       //this.candidate_A_poll_amt_p = candidate_A_poll_amt_p;

       this.d = 50; 
       this.state=state;
       this.state=0;
       this.over = false;
       this.clicked = false;
       }

       show() {
       let radius = 40;
       //if (this.over || (this.state==mobilestate)){
       if (this.over){

          strokeWeight(0);
          //textFont("Perpetua");
          //bright yellow circle
          fill(49, 100, 100);
          circle(this.x,this.y,radius);
          noTint();
          }
          else
          {
          strokeWeight(0);
          fill(20, 50, 50);
          circle(this.x,this.y,radius);
          if (appstate < 3) fill(20, 100, 100);
          if (appstate > 2) tint(40, 100, 95);
          } 
      if (this.clicked)
         {
         noTint();
         
         if (this.state==8)
             {
             textStyle(ITALIC);
             textSize(20);
             text ('Clicked state 8', 100,100);
             textStyle(NORMAL);
             }
         }

       }

       //test for rollover
       rollover(px, py) {
       px=px+adjxby*(-1);
       py=py+adjyby*(-1);
       let d = dist(px, py, this.x, this.y);
       this.over = d < this.d;
  }

       openLink(){
       if (this.over) {
       print('States:' + this.state);
       this.clicked = true;
        }
       else {
       this.clicked = false;
         }
       }

       setdefault(){
       }
  }

