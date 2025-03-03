var x=false;
var caveData ={
	info:{
		layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
			[4,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,7,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
			[4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
			[4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
			
			
		],
		src:`images/bg3.png`,
	},
	states:
	[		
			{
				fps:1,
				cycle:false,
				frames:[
					{width:256, height:256, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:512, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:768, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:1024, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:1280, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:1536, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:1792, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:2048, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[8,8,8,8,0,2,8,8,8,8,8,0,2,8,8,8,8,8,0,2,8,8,8,8,8,0,2,8,8,8,8,8,0,2,8],
			[8,8,8,8,1,3,8,8,5,8,8,1,3,8,8,5,8,8,1,3,8,8,5,8,8,1,3,8,8,5,8,8,1,3,8],
			[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			],
			src:`images/bg3.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,8,x,x,8,x,x,x,x,x,x,8,8,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/bg3.png`,
			},
			states:caveData.states
			
			}