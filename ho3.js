    (function() {
const canvas = document.getElementById("c1");
const context = canvas.getContext("2d");


//I used this tutorial to learn how to add sound effects  - https://www.youtube.com/watch?v=oqsjyzLicgE
let sound = document.getElementById("sound");

let gameo = document.getElementById("gameo");

let die = document.getElementById("die");

let jump = document.getElementById("jump");

let music = document.getElementById("music");

let end = document.getElementById("end");



const background = new Image();
background.src = "https://d2ujflorbtfzji.cloudfront.net/package-screenshot/313f6cf6-b8bc-4428-bda3-8fc3dd1a233c_scaled.jpg";


const fire = new Image();
fire.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47301788_2107949316182361_5868165803085398016_n.png?_nc_cat=109&_nc_ht=scontent.fevn2-1.fna&oh=e74f54ea9f82a7447e16ed05903b8c94&oe=5C996D07";



const plant = new Image();
plant.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47234494_1782807225158827_2107983237505613824_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=8fbe240eddf73f2ed29ac9cd2719580d&oe=5CA10514";

const plantdown = new Image();
plantdown.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47234494_1782807225158827_2107983237505613824_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=8fbe240eddf73f2ed29ac9cd2719580d&oe=5CA10514";

const plantup = new Image();
plantup.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47382724_1714785118626795_5993517138038489088_n.png?_nc_cat=108&_nc_ht=scontent.fevn2-1.fna&oh=6deb93ed4da8c0873dea9295ba6438e8&oe=5C6F1EA0";

const enemyleft = new Image();
enemyleft.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47191383_2756047511286040_6769379241776644096_n.png?_nc_cat=105&_nc_ht=scontent.fevn2-1.fna&oh=4e053b2fc814b72cfea3e495a91a0912&oe=5C9FFD7C";

const enemyright = new Image();
enemyright.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47191383_2756047511286040_6769379241776644096_n.png?_nc_cat=105&_nc_ht=scontent.fevn2-1.fna&oh=4e053b2fc814b72cfea3e495a91a0912&oe=5C9FFD7C";

const realtube = new Image();
realtube.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47232907_495690740921742_4297066405431345152_n.png?_nc_cat=100&_nc_ht=scontent.fevn2-1.fna&oh=534e6d42bb7251881ff458a3377b704f&oe=5CA65D8A";

const gameover = new Image();
gameover.src = "http://udgtv.com/wp-content/uploads/2018/05/Game-Over.jpg";

const beton = new Image();
beton.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47230138_495134207644420_3807445884648554496_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=5aa12a58a891175c1855f796335652e7&oe=5C64F6AC";

const stone = new Image();
stone.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47104641_583078025480486_1177825490220613632_n.png?_nc_cat=110&_nc_ht=scontent.fevn2-1.fna&oh=348f0e0d7be61b4527ec9c4b49d0768d&oe=5CA70792";

const edge = new Image();
edge.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47210526_777074879313302_2361479796522745856_n.png?_nc_cat=102&_nc_ht=scontent.fevn2-1.fna&oh=50061b2b9c9e3f6e59b551ddf13f4637&oe=5C9E782C";

const platform = new Image();
platform.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47133407_2006209366081518_7402496887661527040_n.png?_nc_cat=100&_nc_ht=scontent.fevn2-1.fna&oh=25a18696074d05177fb09ca8ef984daa&oe=5C696EB5";


const tubetop = new Image();
tubetop.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47208543_260464581258635_5862827266110652416_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=605a3bba788e0840a32ce560e9a0460b&oe=5CA27346";


const heart = new Image();
heart.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47143922_913718562156841_6690636887624777728_n.png?_nc_cat=111&_nc_ht=scontent.fevn2-1.fna&oh=3dffc0006834a64aca4b010af03a3f36&oe=5C9DCF1E";

const coin = new Image();
coin.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47396652_447585549104668_1777118666626695168_n.png?_nc_cat=101&_nc_ht=scontent.fevn2-1.fna&oh=a69b8f008f5e5667d4f575709b068781&oe=5CA6C40C";


const enemy = new Image();
enemy.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47191383_2756047511286040_6769379241776644096_n.png?_nc_cat=105&_nc_ht=scontent.fevn2-1.fna&oh=4e053b2fc814b72cfea3e495a91a0912&oe=5C9FFD7C";

const mario = new Image();
mario.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47264874_740205439673654_2931118323988955136_n.png?_nc_cat=108&_nc_ht=scontent.fevn2-1.fna&oh=a80631ff5b29aa05b407360ab293ee72&oe=5C711A4B";

const grass = new Image();
grass.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47318104_507075539787860_8401265822672093184_n.jpg?_nc_cat=108&_nc_ht=scontent.fevn2-1.fna&oh=8f3472be73819e786cba5b346bcf35d4&oe=5CA6C6F8";

const tube = new Image();
tube.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47388301_301503443826997_6319240018883772416_n.png?_nc_cat=111&_nc_ht=scontent.fevn2-1.fna&oh=9490ee3093be944f10d9f1f5cbba5e23&oe=5C67DCAA";

const lava = new Image();
lava.src = "https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0464/6976/rrr12x12_Pixel_Block_Lava_PRINT_FILE_shop_preview.jpg";


const question = new Image();
question.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47284408_2262368114009706_4087602701536329728_n.png?_nc_cat=102&_nc_ht=scontent.fevn2-1.fna&oh=89dd759a4ce11bfbf47ef9851ff87aee&oe=5CAA9DC1";


let points = 0;
let life = 3;
let level =1;

let side = 1;

let borderRight = 900;
let borderLeft = 500;

let borderTop = 311;
let borderBottom = 450;



//This is just a basic controller, very similar to the one we used in class 
const controller = {

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    let key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37:
        controller.left = key_state;
      break;
      case 38:
        controller.up = key_state;
      break;
      case 39:
        controller.right = key_state;
      break;
      case 32:
        controller.space = key_state;

    }

  }

};

// This is where I learned about this method of creating a map in the canvas - https://www.npmjs.com/package/canvas-tile-map
//some other details and calculations of the exact x and y positions are from various programming pages 
let map =  [
    0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  
   	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,8,0,8,0,8,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,
    5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
    3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];


  let size = 50;
  let columns = 20;
  let rows = 12;

  canvas.width = size*columns;
  canvas.height = size*rows;

  drawMap = function() {

    for (let index = 0; index < map.length; index ++) {


      if(map[index]===0){
        
      }

      if(map[index]===5 ){
        //context.fillStyle = "#004d00"; 
        //ontext.fillRect((index % 20) * size, Math.floor(index/20) * size, size, size);
        context.drawImage(grass,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

      if(map[index]===4){

          context.drawImage(tubetop,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

        if(map[index]===1){

          context.drawImage(realtube,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


      if(map[index]===3){

          context.drawImage(stone,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }



       if(map[index]===7){

          context.drawImage(lava,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      


       if(map[index]===2){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===8){




       		enemyX = (index % 20) * size;
       		enemyY = Math.floor(index/20) * size;
          context.drawImage(platform, enemyX, enemyY, size, size);


      }


       if(map[index]===6){

          context.drawImage(tube,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      
      
    }

    

  };





 game = {

    
    hero: {

      color:"#ff9900",
      height:32,
      jumping:false,
      oldx:160,
      oldy:160,
      xDelta:0,
      yDelta:0,
      width:24,
      x:160,
      y:60,


        draw: function(){
    

    //context.fillStyle = "#0d0d0d";// color of hero
    //context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(mario,this.x, this.y, this.width, this.height);
    
  },

    },
//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB



    //BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB


    coin: { 
    	
   	height:30,
      
      
      width:30,
      x:610,
      y:255,
	  draw: function(){
    

    
    context.drawImage(coin,this.x, this.y, this.width, this.height);
    if(game.coin.x<game.hero.x +game.hero.width-10 &&game.coin.x+game.coin.width>game.hero.x+10 && game.coin.y < game.hero.y+game.hero.height-10 &&game.coin.y +game.coin.height>game.hero.y+10 ){
					//alert("GAME OVER "+" "+" Click OK to restart");  	
					game.coin.x = 1500;		
					points ++;	

          //this is also part of the sound adding tutorial I mentioned at the beginning 
            let soundFlag = true;

                if (soundFlag){
                  sound.pause();
                  sound.currentTime = 0;
                  sound.play();
                  soundFlag = false;
                }
                
  			}
    
  }



    },



       coin1: { 
    	
   	height:30,
      
      
      width:30,
      x:710,
      y:255,
	  draw: function(){
    

    
    context.drawImage(coin,this.x, this.y, this.width, this.height);
    if(game.coin1.x<game.hero.x +game.hero.width-10 &&game.coin1.x+game.coin1.width>game.hero.x+10 && game.coin1.y < game.hero.y+game.hero.height-10 &&game.coin1.y +game.coin1.height>game.hero.y+10 ){
					//alert("GAME OVER "+" "+" Click OK to restart");  	
					game.coin1.x = 1500;
					points ++;	
            let soundFlag = true;

                if (soundFlag){
                  sound.pause();
                  sound.currentTime = 0;
                  sound.play();
                  soundFlag = false;
                }
                		
  			}
    
  }



    },



    //=========================
           coin2: { 
    	
   	height:30,
      
      
      width:30,
      x:660,
      y:100,
	  draw: function(){
    

    
    context.drawImage(coin,this.x, this.y, this.width, this.height);
    if(game.coin2.x<game.hero.x +game.hero.width-10 &&game.coin2.x+game.coin2.width>game.hero.x+10 && game.coin2.y < game.hero.y+game.hero.height-10 &&game.coin2.y +game.coin2.height>game.hero.y+10 ){
					//alert("GAME OVER "+" "+" Click OK to restart");  	
					game.coin2.x = 1500;	
					points ++;	
            let soundFlag = true;

                if (soundFlag){
                  sound.pause();
                  sound.currentTime = 0;
                  sound.play();
                  soundFlag = false;
                }
                	
  			}
    
  }



    },
    //======================



    	       coin3: { 
    	
   	height:30,
      
      
      width:30,
      x:365,
      y:210,
	  draw: function(){
    

    
    context.drawImage(coin,this.x, this.y, this.width, this.height);
    if(game.coin3.x<game.hero.x +game.hero.width-10 &&game.coin3.x+game.coin3.width>game.hero.x+10 && game.coin3.y < game.hero.y+game.hero.height-10 &&game.coin1.y +game.coin3.height>game.hero.y+10 ){
					//alert("GAME OVER "+" "+" Click OK to restart");  	
					game.coin3.x = 1500;	
					points ++;		
            let soundFlag = true;

                if (soundFlag){
                  sound.pause();
                  sound.currentTime = 0;
                  sound.play();
                  soundFlag = false;
                }
                
  			}
    
  }



    },
    //===================================



    enemy: {

      height:30,
      
      
      xDelta:1,
      yDelta:1,
      width:30,
      x:520,
      y:420,

    draw: function(){
    

    //context.fillStyle = "#0d0d0d";// color of hero
    //context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(enemy,this.x, this.y, this.width, this.height);
    
  },


  up: function(){


  			if(game.enemy.x+game.enemy.width>borderRight){
  				game.enemy.xDelta= game.enemy.xDelta*(-1);
          //context.drawImage(enemyleft,this.x, this.y, this.width, this.height);
          enemy.src = enemyleft.src;

  			}

  			if(game.enemy.x <= borderLeft){
  				game.enemy.xDelta= game.enemy.xDelta*(-1);
          enemy.src = enemyright.src;
  			}


  			if(game.enemy.x<game.hero.x +game.hero.width-5 &&game.enemy.x+game.enemy.width>game.hero.x+5 && game.enemy.y < game.hero.y+game.hero.height-10 &&game.enemy.y +game.enemy.height>game.hero.y+5 && game.hero.oldy>=game.hero.y){
					//alert("GAME OVER "+" "+" Click OK to restart"); 
					life --; 
            let soundFlag = true;

                if (soundFlag && life !=0){
                  die.pause();
                  die.currentTime = 0;
                  die.play();
                  soundFlag = false;
                } 	
          game.hero.yDelta = -25;
        game.hero.jumping = true;
					game.hero.x = 5;	
          game.hero.y = 500;	
        
  			}



if(game.hero.y+game.hero.height>game.enemy.y && game.hero.x + game.hero.width-5>=game.enemy.x && game.hero.x<game.enemy.x+game.enemy.width-5 && game.hero.oldy<game.hero.y){
//alert("GAME OVER "+" "+" Click OK to restart"); \



game.enemy.y+=7;
game.enemy.height = 10;

let soundFlag = true;

                if (soundFlag){
                  music.pause();
                  music.currentTime = 0;
                  music.play();
                  soundFlag = false;
                }


game.enemy.xDelta =0;
setTimeout(function(){;

game.enemy.x=1000;	
},500)





}
  			game.enemy.x += game.enemy.xDelta;



        




  },


    },





      plant: {

      height:40,
      
      
      xDelta:1,
      yDelta:1,
      width:30,
      x:460,
      y:313,

    draw: function(){
    

    
    context.drawImage(plant,this.x, this.y, this.width, this.height);
    
  },


  up: function(){


        if(game.plant.y+game.plant.height>borderBottom){
          game.plant.yDelta= game.plant.yDelta*(-1);
          
          plant.src = plantup.src;

        }

        if(game.plant.y <= borderTop){
          game.plant.yDelta= game.plant.yDelta*(-1);
          plant.src = plantdown.src;
        }


        if(game.plant.x<game.hero.x +game.hero.width-5 &&game.plant.x+game.plant.width>game.hero.x+5 && game.plant.y < game.hero.y+game.hero.height-10 &&game.plant.y +game.plant.height>game.hero.y+5 ){
          //alert("GAME OVER "+" "+" Click OK to restart"); 
          life --;  
          let soundFlag = true;

                if (soundFlag && life !=0){
                  die.pause();
                  die.currentTime = 0;
                  die.play();
                  soundFlag = false;
                } 
          game.hero.yDelta = -25;
        game.hero.jumping = true;
          game.hero.x = 5;  
          game.hero.y = 500;  

        }

        game.plant.y += game.plant.yDelta;





  },


    },



    plant2:{
            height:40,
      
      
      xDelta:1,
      yDelta:0,
      width:30,
      x:1500,
      y:313,

    draw: function(){
    

    
    context.drawImage(plant,this.x, this.y, this.width, this.height);
    
  },


  up: function(){


        if(game.plant2.y+game.plant2.height>borderBottom){
          game.plant2.yDelta= game.plant2.yDelta*(-1);
          
          plant.src = plantup.src;

        }

        if(game.plant2.y <= borderTop){
          game.plant2.yDelta= game.plant2.yDelta*(-1);
          plant.src = plantdown.src;
        }


        if(game.plant2.x<game.hero.x +game.hero.width-5 &&game.plant2.x+game.plant2.width>game.hero.x+5 && game.plant2.y < game.hero.y+game.hero.height-10 &&game.plant2.y +game.plant2.height>game.hero.y+5 ){
          //alert("GAME OVER "+" "+" Click OK to restart"); 
          life --;  
          let soundFlag = true;

                if (soundFlag && life !=0){
                  die.pause();
                  die.currentTime = 0;
                  die.play();
                  soundFlag = false;
                } 
          game.hero.yDelta = -25;
        game.hero.jumping = true;
          game.hero.x = 5;  
          game.hero.y = 500;    
        }

        game.plant2.y += game.plant2.yDelta;





  },
    },

    plant3:{
            height:40,
      
      
      xDelta:1,
      yDelta:1,
      width:30,
      x:1460,
      y:313,

    draw: function(){
    

    
    context.drawImage(plant,this.x, this.y, this.width, this.height);
    
  },


  up: function(){


        if(game.plant3.y+game.plant3.height>borderBottom){
          game.plant3.yDelta= game.plant3.yDelta*(-1);
          
          plant.src = plantup.src;

        }

        if(game.plant3.y <= borderTop){
          game.plant3.yDelta= game.plant3.yDelta*(-1);
          plant.src = plantdown.src;
        }


        if(game.plant3.x<game.hero.x +game.hero.width-5 &&game.plant3.x+game.plant3.width>game.hero.x+5 && game.plant3.y < game.hero.y+game.hero.height-5 &&game.plant3.y +game.plant3.height>game.hero.y+5 ){
          //alert("GAME OVER "+" "+" Click OK to restart"); 
          life --;  
          let soundFlag = true;

                if (soundFlag && life !=0){
                  die.pause();
                  die.currentTime = 0;
                  die.play();
                  soundFlag = false;
                } 
          game.hero.yDelta = -25;
        game.hero.jumping = true;
          game.hero.x = 5;  
          game.hero.y = 500;    
        }

        game.plant3.y += game.plant3.yDelta;





  },
    },

   


   
   // This part is from a GitHub link. I have done some changes, but most of it is the same as the original
    //It checks what number is assigned to the tile,  according to that it decides from which sides the character
    // can enter. then at the bottom it does the exact calculations for every possible side
    collision: {

     
      
      1:function(object, row, column) {

        

        if (this.topCollision(object, row)) { return; }
        this.rightCollision(object, column);          

      },

     
      2:function(object, row, column) {

        if (this.topCollision(object, row)) { return; }
        this.leftCollision(object, column);

      },

      
      3:function(object, row, column) {

        this.rightCollision(object, column);

      },

      4:function(object, row, column) {

        if (this.topCollision(object, row)) { return; }
        if (this.leftCollision(object, column)) { return; }
        this.rightCollision(object, column);

      },

     
      5:function(object, row, column) {

        this.topCollision(object, row);

      },

      6:function(object, row, column) {

        
        if (this.leftCollision(object, column)) { return; }
        this.rightCollision(object, column);

      },


       7:function(object, row, column) {

        
         this.dangerCollision(object, row);
          game.hero.yDelta = -25;
          game.hero.jumping = true;
          game.hero.x = 5;   
          game.hero.y = 500; 
           let soundFlag = true;

                if (soundFlag && life !=0){
                  die.pause();
                  die.currentTime = 0;
                  die.play();
                  soundFlag = false;
                } 
          life--;
         //alert("GAME OVER "+" "+" Click OK to restart");
         

      },
      8:function(object, row, column) {

        if (this.topCollision(object, row)) { return; }
        if (this.leftCollision(object, column)) { return; }
        this.rightCollision(object, column);


      },

      
      leftCollision(object, column) {

        if (object.xDelta > 0) {

          let left = column * size;

          if (object.x + object.width * 0.5 > left && object.oldx <= left) {

            object.xDelta = 0;
            object.x = object.oldx = left - object.width * 0.5 - 0.001;

            return true;

          }

        }

        return false;

      },

      

      rightCollision(object, column) {

        if (object.xDelta < 0) {

          let right = (column + 1) * size;

          if (object.x + object.width * 0.5 < right && object.oldx + object.width * 0.5 >= right) {

            object.xDelta = 0;
            object.oldx = object.x = right - object.width * 0.5;

            return true;

          }

        }

        return false;

      },

      topCollision(object, row) {

        if (object.yDelta > 0) {

          let top = row * size;

          if (object.y + object.height > top && object.oldy + object.height <= top) {

            object.jumping = false;
            object.yDelta = 0;
            object.oldy = object.y = top - object.height - 0.01;

            return true;

          }

        }

        return false;

      },

      dangerCollision(object,row){

            if (object.yDelta > 0) {

          let top = row * size;

          if (object.y + object.height > top && object.oldy + object.height <= top) {

            object.jumping = false;
            object.yDelta = 0;
            object.oldy = object.y = top - object.height - 0.01;
              //alert("GAME OVER "+" "+" Click OK to restart");

            return true;

          }

        }

      }




    },




    
    blop: function() {

      
      if (controller.left) {

        game.hero.xDelta -= 0.25;
        mario.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47101554_1960200930737060_7403052007889567744_n.png?_nc_cat=100&_nc_ht=scontent.fevn2-1.fna&oh=594e4c1b3e7b443d0859dc07e58e29a0&oe=5CABFC11";


      }

      if (controller.right) {

        game.hero.xDelta += 0.25;
        mario.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47264874_740205439673654_2931118323988955136_n.png?_nc_cat=108&_nc_ht=scontent.fevn2-1.fna&oh=a80631ff5b29aa05b407360ab293ee72&oe=5C711A4B";

      }

      if (controller.up && !game.hero.jumping) {

        game.hero.yDelta = -25;
        game.hero.jumping = true;

       

      

      }


   

      game.hero.yDelta += 1; // gravity

      game.hero.oldx = game.hero.x;// last position of the hero
      game.hero.oldy = game.hero.y;
      game.hero.x += game.hero.xDelta;
      game.hero.y += game.hero.yDelta;





      if (game.hero.x < 0) {

        game.hero.xDelta = 0;
        game.hero.oldx = game.hero.x = 0;

      } else if (game.hero.x + game.hero.width > canvas.width && level >=1) {
      	level++;

      	borderLeft = 100;
      	borderRight = 300;

        borderTop = 312;
        borderBottom = 353;

      	game.enemy.y = 420;
      	game.enemy.x = 160;
        
        game.plant.x = 510;
        game.plant.y = 313;


        game.plant3.y=313;
        game.plant3.yDelta = 0;
        game.enemy.height = 30;
        game.enemy.xDelta =1;

        

        game.plant.yDelta = 0.03;
        //game.plant2.x = 1500;

      	grass.src ="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47185529_274780373222591_4789351541104443392_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=fc6c8870d876c9b290343fd437ea09ee&oe=5C664A8C";
      	platform.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47181187_2010581299056614_7799738344149090304_n.png?_nc_cat=100&_nc_ht=scontent.fevn2-1.fna&oh=3f81a2262fb10e6085e4ba58fce1bd9f&oe=5C7131F5";
      	stone.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47166614_2058705470818525_6211874662641565696_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=b650cd27a2cad946af5bc260a34c8749&oe=5CA2F530";
        background.src = "https://d2ujflorbtfzji.cloudfront.net/package-screenshot/f5380270-ee22-4db1-8573-4c6a1526c4ba_scaled.jpg";
        plantdown.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47234494_1782807225158827_2107983237505613824_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=8fbe240eddf73f2ed29ac9cd2719580d&oe=5CA10514";
        plant.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47234494_1782807225158827_2107983237505613824_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=8fbe240eddf73f2ed29ac9cd2719580d&oe=5CA10514";

 map =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  
    0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,8,8,8,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    5,5,5,5,5,1,0,2,5,5,5,5,5,1,0,0,2,5,5,5,
    3,3,3,3,3,6,7,6,3,3,3,3,3,6,7,7,6,3,3,3];

    game.coin.x=460;
    game.coin1.x=710;
    game.coin2.x=560;
    game.coin3.x=810;

    game.coin.y=310;
    game.coin1.y=210;
    game.coin2.y=310;
    game.coin3.y=210;

      drawMap = function() {
   for (let index = 0; index < map.length; index ++) {


      if(map[index]===0){
        

      }

      if(map[index]===5 || map[index]===3 ){
        
        context.drawImage(grass,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

      if(map[index]===4){

          context.drawImage(tubetop,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


      if(map[index]===3){

          context.drawImage(stone,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===7){

          context.drawImage(lava,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      


       if(map[index]===2 || map[index]===1){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===8){




       		enemyX = (index % 20) * size;
       		enemyY = Math.floor(index/20) * size;
          context.drawImage(platform, enemyX, enemyY, size, size);


      }


       if(map[index]===6){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      
      
    }
    

  };





        //+++++++++++++++++++++++
        	if(game.hero.x + game.hero.width > canvas.width ){
        		//level++;
        		if(level >=3){
        			//level++;
        borderLeft = 150;
      	borderRight = 450;
        borderBottom = 548;
        borderTop=100;

      	game.enemy.y = 420;
      	game.enemy.x = 160;
        game.plant.yDelta = 2;
        game.plant.x = 710;
        game.plant.height = 35;
        game.enemy.height = 30;
        game.enemy.xDelta =1;
        


      	grass.src ="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47149148_978659052329141_6978225926374948864_n.png?_nc_cat=103&_nc_ht=scontent.fevn2-1.fna&oh=fd3ecb86540f8b833fd14469638d403a&oe=5C6DCDE2";
      	stone.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47314356_192149631731238_6494133196005834752_n.png?_nc_cat=108&_nc_ht=scontent.fevn2-1.fna&oh=693fc1da705d2b6a55d56326f3a25541&oe=5CB23D2C";
      	platform.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47170930_185697345710080_8523018275678846976_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=bff4258eafe2f913f40de53d2d810bdb&oe=5C6D014E";
      	edge.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47224674_275138773352533_8338163278395998208_n.png?_nc_cat=109&_nc_ht=scontent.fevn2-1.fna&oh=a7635360d0c16decd443bdbbd4abaac1&oe=5C9C6CCD";
 		tube.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47375796_942854605923651_873655356562079744_n.png?_nc_cat=110&_nc_ht=scontent.fevn2-1.fna&oh=2a821fa158fe569e433758bfd964afb0&oe=5C664A2F";
 		tubetop.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47376501_830291044029620_6570683914245898240_n.png?_nc_cat=101&_nc_ht=scontent.fevn2-1.fna&oh=49b70d869c3e993eb4d5a286fb53eef4&oe=5CB1B832";
    background.src = "https://d2ujflorbtfzji.cloudfront.net/package-screenshot/61b0db4e-7338-4ca4-b28f-d6b92fab574b_scaled.jpg";
    
    plant.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47230107_269570223759726_3967990619711733760_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=e7650ed208be86c0de6537356307e893&oe=5CB050C7";
    plantup.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47168280_1122456554581558_485426360664195072_n.png?_nc_cat=110&_nc_ht=scontent.fevn2-1.fna&oh=51f04859a621cfc9e5816d5dc665df14&oe=5C9BF1F9";
  plantdown.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47230107_269570223759726_3967990619711733760_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=e7650ed208be86c0de6537356307e893&oe=5CB050C7";


 map =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,8,0,8,8,0,8,0,8,0,8,0,8,0,0,
    0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    5,5,5,5,5,5,5,5,2,0,0,0,0,0,0,0,0,0,0,2,
    3,3,3,3,3,3,3,3,2,7,7,7,7,7,7,7,7,7,7,2];

    game.coin.x=610;
    game.coin1.x=360;
    game.coin2.x=710;
    game.coin3.x=510;

    game.coin.y=200;
    game.coin1.y=260;
    game.coin2.y=200;
    game.coin3.y=200;

      drawMap = function() {
   for (let index = 0; index < map.length; index ++) {


      if(map[index]===0){
        

      }

      if(map[index]===5 || map[index]===1){
        
        context.drawImage(grass,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

      if(map[index]===4){

          context.drawImage(tubetop,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

      if(map[index]===3){

          context.drawImage(stone,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }



       if(map[index]===7){

          context.drawImage(lava,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      


       if(map[index]===2){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===8){




       		enemyX = (index % 20) * size;
       		enemyY = Math.floor(index/20) * size;
          context.drawImage(platform, enemyX, enemyY, size, size);


      }


       if(map[index]===6){

          context.drawImage(tube,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      
      
    }
    

  };
        			
        		}

        	}




        	//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW


        	if(game.hero.x + game.hero.width > canvas.width){
        			//level++;
        		if(level>=4){



        			      	borderLeft = 200;
      	borderRight = 450;



        borderBottom = 452;
        borderTop = 411;

      	game.enemy.y = 272;
      	game.enemy.x = 201;
        game.plant.yDelta = 0.03;
        game.plant.y = 412;
        game.plant2.y=412;

        game.plant3.y=412;

        game.plant3.x=1412;
        game.plant2.x=110;

        game.plant.height = 40;
        game.enemy.height = 30;
        game.enemy.xDelta =1;

      	grass.src ="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47462608_564456630665731_2385072382592155648_n.png?_nc_cat=111&_nc_ht=scontent.fevn2-1.fna&oh=8101ea3c4399777a79f776cfcf9f5dea&oe=5C9E28EA";
      	stone.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47210063_362345261192725_1361694990077526016_n.png?_nc_cat=109&_nc_ht=scontent.fevn2-1.fna&oh=c80f3a01a16725606a1ff34daaed8c1d&oe=5C68B4C2";
      	platform.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47175941_322300265036079_7939906504524562432_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=54ade708f08b2755da3c4cdea626a4aa&oe=5C733672";
      	edge.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47134112_1106798436158400_1982379607583621120_n.png?_nc_cat=101&_nc_ht=scontent.fevn2-1.fna&oh=0f267cda7f8bfaa73ebb1a8fb562f3e9&oe=5C67AE41";
 		tube.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47280814_343354786480120_8757628179868286976_n.png?_nc_cat=111&_nc_ht=scontent.fevn2-1.fna&oh=3662a78a4f9a8a41f390e50eafb9980f&oe=5C6F42F1";
 		tubetop.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47228525_325407214959264_2681587694823276544_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=4dc3fa3965b96bca4ee2500599587f5f&oe=5CAF74F9";
    background.src = "https://d2ujflorbtfzji.cloudfront.net/package-screenshot/c2bad88c-2021-42a1-b718-4b87aaaa3f81_scaled.jpg";
    

    plantup.src ="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47382724_1714785118626795_5993517138038489088_n.png?_nc_cat=108&_nc_ht=scontent.fevn2-1.fna&oh=6deb93ed4da8c0873dea9295ba6438e8&oe=5C6F1EA0";
    plantdown.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47234494_1782807225158827_2107983237505613824_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=8fbe240eddf73f2ed29ac9cd2719580d&oe=5CA10514";
        plant.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47234494_1782807225158827_2107983237505613824_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=8fbe240eddf73f2ed29ac9cd2719580d&oe=5CA10514";

  map =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    8,8,0,0,0,0,8,0,0,8,0,0,0,0,0,0,0,0,0,0,
    0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,
    0,0,0,0,8,8,8,8,8,0,0,0,2,6,0,6,1,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,2,2,6,0,6,1,1,0,0,
    0,0,0,0,0,0,0,0,0,0,2,2,2,6,0,6,1,1,1,0,
    5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
    3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];

    game.coin.x=410;
    game.coin1.x=360;
    game.coin2.x=60;
    game.coin3.x=10;

    game.coin.y=130;
    game.coin1.y=130;
    game.coin2.y=90;
    game.coin3.y=90;

      drawMap = function() {
   for (let index = 0; index < map.length; index ++) {


      if(map[index]===0){
        

      }

      if(map[index]===5 ){
        
        context.drawImage(grass,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

      if(map[index]===4){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

        if(map[index]===3){

          context.drawImage(stone,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===7){

          context.drawImage(lava,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      


       if(map[index]===2 || map[index]===1){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===8){




       		enemyX = (index % 20) * size;
       		enemyY = Math.floor(index/20) * size;
          context.drawImage(platform, enemyX, enemyY, size, size);


      }


       if(map[index]===6){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      
      
    }
    

  };



        		}



        	}
        	//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
              //LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                              if(game.hero.x + game.hero.width > canvas.width){
              //level++;
            if(level>=5){

                



        borderBottom = 548;
        borderTop = 100;

        //game.enemy.y = 272;
        //game.enemy.x = 201;
        game.plant.yDelta = 4;
        game.plant2.yDelta = 4;
        game.plant3.yDelta = 4;

        game.plant.x= 160;

        game.plant.y = 412;
        game.plant2.y=412;

        game.plant3.y=412;

        game.plant3.x=360;
        game.plant2.x=910;

        game.plant.height = 35;
        game.plant2.height = 35;
        game.plant3.height = 35;



        borderLeft = 400;
        borderRight = 500;

        game.enemy.y = 420;
        game.enemy.x = 401;
        game.enemy.height = 30;
        game.enemy.xDelta =1;

        grass.src ="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47381845_2294175037494346_3704098204023783424_n.png?_nc_cat=100&_nc_ht=scontent.fevn2-1.fna&oh=8f79098a097c6256e7f1f60df0c0de0d&oe=5CAA62B9";
        stone.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47320433_517916745376505_7496223570960318464_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=4b4756ffb4021b3c906090b4002bd3f6&oe=5C71733A";
        platform.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47115093_1070339273137568_8440477585594384384_n.png?_nc_cat=109&_nc_ht=scontent.fevn2-1.fna&oh=f45f323df82940e4f2722def744ff53e&oe=5C6FD747";
        edge.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47115845_198793857693907_5694721271187636224_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=aefe4d16e85e818c98a7ee67e7ec24da&oe=5CA0E23D";
    tube.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47280814_343354786480120_8757628179868286976_n.png?_nc_cat=111&_nc_ht=scontent.fevn2-1.fna&oh=3662a78a4f9a8a41f390e50eafb9980f&oe=5C6F42F1";
    tubetop.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47228525_325407214959264_2681587694823276544_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=4dc3fa3965b96bca4ee2500599587f5f&oe=5CAF74F9";
          beton.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47230138_495134207644420_3807445884648554496_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=5aa12a58a891175c1855f796335652e7&oe=5C64F6AC";
          background.src = "https://3.bp.blogspot.com/-55TcEodI1xk/VtBiZUbl4oI/AAAAAAAAAK4/7sxxtylaXb0/s1600/SnowyGameBackground.png";
          plant.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47230107_269570223759726_3967990619711733760_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=e7650ed208be86c0de6537356307e893&oe=5CB050C7";
    plantup.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47168280_1122456554581558_485426360664195072_n.png?_nc_cat=110&_nc_ht=scontent.fevn2-1.fna&oh=51f04859a621cfc9e5816d5dc665df14&oe=5C9BF1F9";
  plantdown.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47230107_269570223759726_3967990619711733760_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=e7650ed208be86c0de6537356307e893&oe=5CB050C7";


  map =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,
          0,0,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,6,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,
          1,0,0,0,0,0,0,0,0,0,0,0,0,8,0,8,0,8,0,6,
          1,1,1,0,8,0,8,0,8,8,0,0,0,0,0,0,0,0,0,6,
          0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,6,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          4,0,4,0,4,0,4,0,4,5,5,5,5,4,0,0,0,0,0,2,
          4,7,4,7,4,7,4,7,4,3,3,3,3,4,7,7,7,7,7,2];

    game.coin.x=910;
    game.coin1.x=160;
    game.coin2.x=810;
    game.coin3.x=360;

    game.coin.y=310;
    game.coin1.y=160;
    game.coin2.y=110;
    game.coin3.y=160;

      drawMap = function() {
   for (let index = 0; index < map.length; index ++) {


      if(map[index]===0){
        

      }

      if(map[index]===5 ){
        
        context.drawImage(grass,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

      if(map[index]===4){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

        if(map[index]===3){

          context.drawImage(stone,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===7){

          context.drawImage(lava,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      


       if(map[index]===2 || map[index]===1){

          context.drawImage(beton,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===8){




          enemyX = (index % 20) * size;
          enemyY = Math.floor(index/20) * size;
          context.drawImage(platform, enemyX, enemyY, size, size);


      }


       if(map[index]===6){

          context.drawImage(beton,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      
      
    }
    

  };



            }



          }

              //LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

              //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF



               if(game.hero.x + game.hero.width > canvas.width){
              //level++;
            if(level>=6){

              
                let soundFlag = true;

                if (soundFlag && life !=0){
                  end.pause();
                  end.currentTime = 0;
                  end.play();
                  soundFlag = false;
                } 


                      borderLeft = 400;
        borderRight = 500;

        game.enemy.y = 420;
        game.enemy.x = 1500;
       

        grass.src ="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47381845_2294175037494346_3704098204023783424_n.png?_nc_cat=100&_nc_ht=scontent.fevn2-1.fna&oh=8f79098a097c6256e7f1f60df0c0de0d&oe=5CAA62B9";
        stone.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47320433_517916745376505_7496223570960318464_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=4b4756ffb4021b3c906090b4002bd3f6&oe=5C71733A";
        platform.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47115093_1070339273137568_8440477585594384384_n.png?_nc_cat=109&_nc_ht=scontent.fevn2-1.fna&oh=f45f323df82940e4f2722def744ff53e&oe=5C6FD747";
        edge.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47115845_198793857693907_5694721271187636224_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=aefe4d16e85e818c98a7ee67e7ec24da&oe=5CA0E23D";
    tube.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47280814_343354786480120_8757628179868286976_n.png?_nc_cat=111&_nc_ht=scontent.fevn2-1.fna&oh=3662a78a4f9a8a41f390e50eafb9980f&oe=5C6F42F1";
    tubetop.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47228525_325407214959264_2681587694823276544_n.png?_nc_cat=104&_nc_ht=scontent.fevn2-1.fna&oh=4dc3fa3965b96bca4ee2500599587f5f&oe=5CAF74F9";
          beton.src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47230138_495134207644420_3807445884648554496_n.png?_nc_cat=106&_nc_ht=scontent.fevn2-1.fna&oh=5aa12a58a891175c1855f796335652e7&oe=5C64F6AC";
          background.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/47365747_2195422477338541_2506464968879112192_n.png?_nc_cat=110&_nc_ht=scontent.fevn2-1.fna&oh=1fbacbec30a66fbb1aa7c6b0bac22595&oe=5CA3F395";

  map =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
          5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];

    game.coin.x=4100;
    game.coin1.x=3600;
    game.coin2.x=6000;
    game.coin3.x=1000;

    game.coin.y=130;
    game.coin1.y=130;
    game.coin2.y=90;
    game.coin3.y=90;


        game.plant.yDelta = 0;
        game.plant.y = 412;
        game.plant2.y=412;

        game.plant3.y=412;

        game.plant3.x=1412;
        game.plant2.x=1110;
        game.plant.x=1412;

        game.plant.height = 40;

      drawMap = function() {
   for (let index = 0; index < map.length; index ++) {


      if(map[index]===0){
        

      }

      if(map[index]===5 ){
        
        context.drawImage(beton,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

      if(map[index]===4){

          context.drawImage(edge,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }

        if(map[index]===3){

          context.drawImage(stone,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===7){

          context.drawImage(lava,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      


       if(map[index]===2 || map[index]===1){

          context.drawImage(beton,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }


       if(map[index]===8){




          enemyX = (index % 20) * size;
          enemyY = Math.floor(index/20) * size;
          context.drawImage(platform, enemyX, enemyY, size, size);


      }


       if(map[index]===6){

          context.drawImage(beton,(index % 20) * size, Math.floor(index/20) * size, size, size);

      }
      
      
    }
    

  };



            }



          }

              //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
        //+++++++++++++++++++++++



        game.hero.xDelta = 0;
        


        game.hero.oldx = game.hero.x = 0;





      }









      if (game.hero.y < 0) {

        game.hero.yDelta = 0;
        game.hero.oldy = game.hero.y = 0;

      } else if (game.hero.y + game.hero.height > canvas.height) {


          game.hero.oldy = game.hero.y =1000;




        

      }





      //This is also from a GitHub link. My calculations of this part would have bugs from time to time.
      // So I replaced it with this and made changes to it to fit my game. 


      let tile_x = Math.floor((game.hero.x + game.hero.width * 0.5) / size);
      let tile_y = Math.floor((game.hero.y + game.hero.height) / size);
      let value_at_index = map[tile_y * columns + tile_x];

      
      if (value_at_index != 0) {

        
        game.collision[value_at_index](game.hero, tile_y, tile_x);

      }


      tile_x = Math.floor((game.hero.x + game.hero.width * 0.5) / size);
      tile_y = Math.floor((game.hero.y + game.hero.height) / size);
      value_at_index = map[tile_y * columns + tile_x];

      if (value_at_index != 0) {

        game.collision[value_at_index](game.hero, tile_y, tile_x);

      } 








    game.hero.xDelta *= 0.9;
     game.hero.yDelta *= 0.9;







      

      

      

    }

  };


let soundFlag = true;



let loop = function() {

context.drawImage(background, 0, 0, canvas.width, canvas.height-50);

  game.plant.draw();
  game.plant.up();

  game.plant2.draw();
  game.plant2.up();

  game.plant3.draw();
  game.plant3.up();


  drawMap();


  game.hero.draw();

  



  

  //game.plant3.draw();
  //game.plant3.up();

 


  
  game.enemy.draw();
  
  game.enemy.up();
  game.coin.draw();
  game.coin1.draw();
  game.coin2.draw();
  game.coin3.draw();
  
  
  context.drawImage(coin, 20, 20, 20, 20);
  context.fillText("X"+ points,45,39);



  context.drawImage(heart, 950, 18, 30, 28);
  
  

    if(points%10===0 && points!=0){
    life++;
    points=0;
  }
  context.fillText(life+"X",910,40);
  context.fillStyle = "white";
  context.font = "25px Sans-Serif";



  
  if (life <=0){
  	//alert("GAME OVER "+" "+" Click OK to restart");
    context.drawImage(gameover, 0, 0, canvas.width, canvas.height-50);
  	//context.drawImage(background, 0, 0, canvas.width, canvas.height-50);
  	//context.fillText("GAME OVER",550,300);
    //context.font = "50px Sans-Serif";

     //let soundFlag = true;

                if (soundFlag){
                  gameo.pause();
                  gameo.currentTime = 0;
                  gameo.play();
                  soundFlag = false;
                }
  }


 

  game.blop();
  
  requestAnimationFrame(loop);
};
loop();





window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);

})();



//Some other links I have used - https://www.w3schools.com/graphics/game_intro.asp
//https://www.khanacademy.org/computing/computer-programming

//https://www.youtube.com/watch?v=txUvD5_ROIU

//https://www.youtube.com/user/nexttrex/videos

//https://www.youtube.com/watch?v=GOJBoGbRNQA

//...
