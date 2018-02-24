module.exports = function solveSudoku(matrix) {

 	return findeSolve(matrix);
}

function findeSolve(matrix){
			for(let i=0;i<9;i++){
	 		for(let k=0;k<9;k++){
	 			if(matrix[i][k]==0){
	 				let busyNumbs=[];
	 				let row=takeRow(i,matrix);
					let col=takeCol(k,matrix);
					let field=takeField(i,k,matrix);
	 				 busyNumbs=row.concat(col,field);
	 				let possibleNumbs=[1,2,3,4,5,6,7,8,9].filter(num => busyNumbs.indexOf(num) < 0);
	 				for(let key=0;key<possibleNumbs.length;key++){
	 					matrix[i][k]=possibleNumbs[key];
	 					
	 					if(findeSolve(matrix))
	 						return findeSolve(matrix);
	 					
	 				}
	 				matrix[i][k]=0;
	 				return false;
	 				
	 			}
	 		}
	 	}
	 	return matrix;
	}


function takeRow(row,arr){
	return arr[row].filter((item) => item != 0);
}


function takeCol(col,arr){
	var tempArr=[];
	for(let i=0;i<arr[col].length;i++){
		tempArr.push(arr[i][col]);
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








