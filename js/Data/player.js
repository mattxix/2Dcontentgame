/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/spritesheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:2,
			cycle:true,
			frames:
			[
				{width:512, height:512, startX:0, startY:1024},
				{width:512, height:512, startX:512, startY:1024},
				{width:512, height:512, startX:1024, startY:1024},
				{width:512, height:512, startX:1536, startY:1024},
				{width:512, height:512, startX:2048, startY:1024}, //5
				{width:512, height:512, startX:2560, startY:1024},
				{width:512, height:512, startX:3072, startY:1024},
				{width:512, height:512, startX:3584, startY:1024},
				{width:512, height:512, startX:4096, startY:1024},
				{width:512, height:512, startX:4608, startY:1024}, //10
				{width:512, height:512, startX:5120, startY:1024},
				{width:512, height:512, startX:5632, startY:1024},
				{width:512, height:512, startX:6144, startY:1024},
				{width:512, height:512, startX:6656, startY:1024},
				{width:512, height:512, startX:7168, startY:1024},//15
				{width:512, height:512, startX:7680, startY:1024},
				{width:512, height:512, startX:8192, startY:1024},
				{width:512, height:512, startX:8704, startY:1024},
				{width:512, height:512, startX:9216, startY:1024},
				{width:512, height:512, startX:9728, startY:1024},//20
				{width:512, height:512, startX:10240, startY:1024},
				{width:512, height:512, startX:10752, startY:1024},
				{width:512, height:512, startX:11264, startY:1024},
				{width:512, height:512, startX:11776, startY:1024},
				{width:512, height:512, startX:12288, startY:1024},//25
				{width:512, height:512, startX:12800, startY:1024}
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:.5,
			cycle:true,
			frames:
			[
				{width:512, height:512, startX:0, startY:0},
				{width:512, height:512, startX:512, startY:0},
				{width:512, height:512, startX:1024, startY:0},
				{width:512, height:512, startX:1536, startY:0},
				{width:512, height:512, startX:2048, startY:0}, //5
				{width:512, height:512, startX:2560, startY:0},
				{width:512, height:512, startX:3072, startY:0},
				{width:512, height:512, startX:3584, startY:0},
				{width:512, height:512, startX:4096, startY:0},
				{width:512, height:512, startX:4608, startY:0}, //10
				{width:512, height:512, startX:5120, startY:0},
				{width:512, height:512, startX:5632, startY:0},
				{width:512, height:512, startX:6144, startY:0},
				{width:512, height:512, startX:6656, startY:0},
				{width:512, height:512, startX:7168, startY:0},//15
				{width:512, height:512, startX:7680, startY:0},
				{width:512, height:512, startX:8192, startY:0},
				{width:512, height:512, startX:8704, startY:0},
				{width:512, height:512, startX:9216, startY:0},
				{width:512, height:512, startX:9728, startY:0},//20
				{width:512, height:512, startX:10240, startY:0},
				{width:512, height:512, startX:10752, startY:0},
				{width:512, height:512, startX:11264, startY:0},
				{width:512, height:512, startX:11776, startY:0}
				
			]
		},
		//The jump animation 
		jump:
		{
			fps:.5,
			cycle:false,
			frames:
			[
				{width:512, height:512, startX:0, startY:1536},
				{width:512, height:512, startX:512, startY:1536},
				{width:512, height:512, startX:1024, startY:1536},
				{width:512, height:512, startX:1536, startY:1536},
				{width:512, height:512, startX:2048, startY:1536}, //5
				{width:512, height:512, startX:2560, startY:1536},
				{width:512, height:512, startX:3072, startY:1536},
				{width:512, height:512, startX:3584, startY:1536},
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:.5,
			cycle:false,
			frames:
			[
				{width:512, height:512, startX:0, startY:512},
				{width:512, height:512, startX:512, startY:512},
				{width:512, height:512, startX:1024, startY:512},
				{width:512, height:512, startX:1536, startY:512},
				{width:512, height:512, startX:2048, startY:512}, //5
				{width:512, height:512, startX:2560, startY:512},
				{width:512, height:512, startX:3072, startY:512},
			]
		},
		//The attack animation 
		attack:
		{
			fps:1,
			cycle:false,
			//width:300,
			frames:
			[
				{width:512, height:512, startX:0, startY:2048},
				{width:512, height:512, startX:512, startY:2048},
				{width:512, height:512, startX:1024, startY:2048},
				{width:512, height:512, startX:1536, startY:2048},
				{width:512, height:512, startX:2048, startY:2048}, //5
				{width:512, height:512, startX:2560, startY:2048},
				{width:512, height:512, startX:3072, startY:2048},
				
			]
		}
	}
		
}