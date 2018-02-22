module.exports = function solveSudoku(matrix) {
  // your solution
var possibleValue={};
var countZero;

for(let t=0;t<1;t++){
	//console.log(t);
	lookPossibleValue(matrix);
	//console.log(possibleValue);
	findeSolution(possibleValue,matrix);
	//console.log(matrix);
		
}




function findeSolution(possibleValue,matrix){
	//finde simple
	for(let key in possibleValue){
		if(possibleValue[key].length == 1){
			//console.log("solution finde! "+key+":"+possibleValue[key][0]);
			matrix[key[0]][key[1]]=possibleValue[key][0];
			delete possibleValue[key];
		}
	}
	//doubles выбираются ячейки с двумя возможными значениями
	let tempKeys=[];
	for(let key in possibleValue){
		if(possibleValue[key].length == 2){
			tempKeys.push(key);
		}
	}
		console.log("position whit 2 numb :"+tempKeys);

				var clearList=[];
				clearList.length=0;

		
	for(let i=1;i<10;i++){
			console.log(i);
			let sameArgArr=[];
			tempKeys.forEach(function(num,index){
				
				if(possibleValue[num].filter((item)=>item==i).length){
						sameArgArr.push(num);
						console.log(num+":"+possibleValue[num]);
				}
			});

			//console.log("");
			for(let k=0;k<9;k++){

				var sameFirstIndex=[];
				sameFirstIndex.length=0;
				sameArgArr.forEach(function(num){
					if(k==num[0]){
						sameFirstIndex.push(num);
					}
					
				});


				if(sameFirstIndex.length>1){
					console.log(sameFirstIndex);
					let tempObj={
						"1":[],
						"2":[],
						"3":[],
						"4":[],
						"5":[],
						"6":[],
						"7":[],
						"8":[],
						"9":[]
					};

					sameFirstIndex.forEach(function(num){

						tempObj[possibleValue[num].filter((item)=>item!=i)].push(num);
						//console.log("aaa"+possibleValue[num].filter((item)=>item!=i)+":"+num);
					});
					
/*
					for(let itemKey in tempObj){
						if(tempObj[itemKey].length==1){
							
							console.log("solution finde! "+itemKey+" on position"+tempObj[itemKey]);
							let positionStr=String(tempObj[itemKey]);
							//console.log(typeof positionStr);
							if(matrix[positionStr[0]][positionStr[1]] === 0){
							matrix[positionStr[0]][positionStr[1]]=+itemKey;}
							//console.log(possibleValue[String(tempObj[itemKey])]);
							
							clearList.push(String(tempObj[itemKey]));
							tempObj[itemKey].length=0;
						}else{
							tempObj[itemKey].length=0;
						}
					}*/

					
				}
				
			}

			
			
	}
	clearList.forEach(function(item){
					delete possibleValue[item];
				});


/***********************************************************************/

/************************************************************************/
}


function lookPossibleValue(matrix){
	countZero=0;
	var allNumber=[1,2,3,4,5,6,7,8,9];
	for(let i=0;i<matrix.length;i++){
		for(let k=0;k<matrix[i].length;k++){
			if(matrix[i][k] ===0){
				countZero++;
				newArr=[];
				let row=takeRow(i,matrix);
				let col=takeCol(k,matrix);
				let field=takeField(i,k,matrix);
				let arr=row.concat(col,field);
			
				allNumber.forEach(function(item){
					 if(!arr.some((elem)=> elem==item)){
					 	newArr.push(item);
					 }
				});

				possibleValue[i+""+k]=newArr;
			}
		}
	}
	console.log(countZero);
}


function takeRow(row,arr){
	return arr[row].filter((item) => item != 0);
}


function takeCol(col,arr){
	var tempArr=[];
	for(let i=0;i<matrix[col].length;i++){
		tempArr.push(matrix[i][col]);
	}
	return tempArr.filter((item) => item != 0);
}


function takeField(posX,posY,arr){
	let limitX=makeLimits(posX);
	let limitY=makeLimits(posY);
	let fieldData=[];
	for(let i=limitX[0];i<limitX[1];i++){
		
		for(let k=limitY[0];k<limitY[1];k++)
			fieldData.push(arr[i][k]);
	}
	return fieldData.filter((item) => item != 0);
}


 function makeLimits(pos){
 	let currentPos;
	switch(pos){
				case 0:
				case 1:
				case 2:
					currentPos=[0,3]
					break;
				case 3:
				case 4:
				case 5:
					currentPos=[3,6]
					break;
				default:
					currentPos=[6,9]
					break;
				}
	return currentPos;
}



return matrix;


}










