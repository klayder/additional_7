module.exports = function solveSudoku(matrix) {
  // your solution
  var allNumber=[1,2,3,4,5,6,7,8,9];
var inpossibleValue=[];



for(let i=0;i<matrix.length;i++){
	for(let k=0;k<matrix[i].length;k++){
		if(matrix[i][k] ===0){
			newArr=[];
			let row=takeRow(i,matrix);
			let col=takeCol(k,matrix);
			let arr=row.concat(col);

			allNumber.forEach(function(item){
				 if(!arr.some((elem)=> elem==item)){
				 	newArr.push(item);
				 }
			} );

			//for fan only
			if(newArr.length === 1){
				matrix[i][k]=newArr[0];
			//	console.log("solution!");
			}
			//
			//console.log(arr+":"+newArr);

	
		}
	}
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
  return matrix;
}

matrix=[
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];







//console.log(matrix);

