function allCTRL($scope) {
	$scope.board = [];
	$scope.xTurn = {val:true};
	$scope.xWins = 0;
	$scope.oWins = 0;
	gameover = false;

	$scope.makeBoard = function () {
    	var result = new Array();
			for(var i = 0; i < ($scope.xsquared); i++) {
			  var arr = new Array();
				  for(var j = 0; j < ($scope.xsquared); j++) {
				    arr.push('');
				  };
			  result.push(arr);
		};
		$scope.board = result	
	};

	$scope.mainSize = function () {
		return {
			width: ($scope.xsquared * 60) + 'px',
			height: ($scope.xsquared * 60) + 'px',
		};
	};

	$scope.rowSize = function () {
		return {
			width: ($scope.xsquared * 60) + 'px',
			height: (60) + 'px',
		};
	};
	
	$scope.ticClick = function(row, cell){
		if ($scope.board[row][cell] == '') {
			$scope.xTurn.val = !$scope.xTurn.val;
			if ($scope.xTurn.val == true) {
				$scope.board[row][cell] = 'X'}
			else {
				$scope.board[row][cell] = 'O'
			};
		};
	};

	//Win Logic
	$scope.checkWin = function(row, cell, player) {
		var winCounter = [0,0,0,0,0,0,0,0,0,0,0,0]
		for (var j = 0; j < 3; j++) {

			//horizontal wins from left, right, center
			if ($scope.board[row][cell+j] == player) {winCounter[0]=winCounter[0]+1};
			if ($scope.board[row][cell-j] == player) {winCounter[1]=winCounter[1]+1};
			if ($scope.board[row][cell+j-1] == player) {winCounter[2]=winCounter[2]+1};
			//vertical wins from bottom, top, center
			if (row-j >= 0) {	
				if ($scope.board[row-j][cell] == player) {winCounter[3]=winCounter[3]+1};
			}
			if (row+j < $scope.xsquared) {	
				if ($scope.board[row+j][cell] == player) {winCounter[4]=winCounter[4]+1};
			}
			if (row+j-1 >= 0 && row+j-1 < $scope.xsquared) {
				if ($scope.board[row+j-1][cell] == player) {winCounter[5]=winCounter[5]+1};
			}
			//diagonal down wins from top, bottom, center
			if (row+j < $scope.xsquared) {
				if ($scope.board[row+j][cell+j] == player) {winCounter[6]=winCounter[6]+1};
			}
			if (row-j >= 0) {
				if ($scope.board[row-j][cell-j] == player) {winCounter[7]=winCounter[7]+1};
			}
			if (row+j-1 >= 0 && row+j-1 < $scope.xsquared) {
				if ($scope.board[row+j-1][cell+j-1] == player) {winCounter[8]=winCounter[8]+1};
			}
			//diagonal up wins from top, bottom, center
			if (row-j >= 0) {
				if ($scope.board[row-j][cell+j] == player) {winCounter[9]=winCounter[9]+1};
			}
			if (row+j < $scope.xsquared) {
				if ($scope.board[row+j][cell-j] == player) {winCounter[10]=winCounter[10]+1};
			}
			if (row+j-1 >= 0 && row+j-1 < $scope.xsquared) {
				if ($scope.board[row+j-1][cell-j+1] == player) {winCounter[11]=winCounter[11]+1};
			}
		};
		//Test wins
		for (var i = 0; i < winCounter.length; i++) {
			if (winCounter[i] == 3) {
				if (player == 'X') 
					$scope.xWins += 1;
				else
					$scope.oWins += 1;
			}
		};	
	};
}



// // Lorin's code!!!
// var board = [['X','','X','','X','','',''],
// ['','X','X','X','','','',''],
// ['X','X','','X','X','','',''],
// ['','X','X','X','','','',''],
// ['X','','X','','X','','',''],
// ['','','','','','','',''],
// ['','','','','','','',''],
// ['','','','','','','','']];

// var directions = [[-1,-1, 'Up left', 'Backslash'],
// 	[-1,0, 'Up', 'Vertical'],
// 	[-1,1, 'Up right', 'Slash'],
// 	[0,-1, 'Left', 'Horizontal'],
// 	[0,1, 'Right'],
// 	[1,-1, 'Down left'],
// 	[1,0, 'Down'],
// 	[1,1, 'Down right']];

// row = 2;
// col = 2;
// move = 'X';
// winKind = '';

// // Test for win conditions when placing a new whatever
// for(i=0;i<8;++i)
// {
// 	// Test in each of the eight directions
// 	if(board[row + (2*directions[i][0])][col + (2*directions[i][1])] == board[row + directions[i][0]][col + directions[i][1]] &&
// 	 board[row + directions[i][0]][col + directions[i][1]] == move)
// 		winKind += ', ' + directions[i][2];

// 	// Test the four of the diagonals
// 	if(i<4)
// 	{
// 		if(board[row + directions[i][0]][col + directions[i][1]] == board[row - directions[i][0]][col - directions[i][1]] &&
// 		 board[row - directions[i][0]][col - directions[i][1]] == move)
// 			winKind += ', ' + directions[i][3];
// 	}
// }

// alert(winKind);


// // More code by Lorin

// // Check a given board and find all exact scores right now

// var board = [
// ['','','','','','O','',''],
// ['','','','','O','','',''],
// ['','','','O','','','',''],
// ['','','O','','','','',''],
// ['X','O','X','','X','','',''],
// ['','X','X','X','','A','A','A'],
// ['X','X','X','X','X','A','A','A'],
// ['','X','X','X','','A','A','A']
// ];

// // This automatically gets populated as we find winning player pieces
// var players = [];

// var directions = [
// 	[-1,-1, 'Backslash'],
// 	[-1,0, 'Vertical'],
// 	[-1,1, 'Slash'],
// 	[0,-1, 'Horizontal']];

// var winKind = '';
// var foundEm;

// for(var row = 0; row < board.length; ++row)
// {
// 	for(var col = 0; col < board[row].length; ++col)
// 	{
// 		for(var i = 0; i<4; ++i)
// 		{
// 			// On the far top or bottom row? We can only do a horizontal test.
// 			if(i!=3 && (row == 0 || row == board.length-1))
// 				continue;
// 			// On the far left or right column? We can only do a vertical test.
// 			if(i!=1 && (col == 0 || col == board[row].length-1))
// 				continue;

// 			// Do the actual test only if there is a piece played on this square
// 			if(board[row][col] != '' &&
// 			// Outer two match?
// 			 board[row + directions[i][0]][col + directions[i][1]] == board[row - directions[i][0]][col - directions[i][1]] &&
// 			// And match the middle?
// 			 board[row - directions[i][0]][col - directions[i][1]] == board[row][col])
// 			{
// 				winKind += '; ' + board[row][col] + " " + directions[i][2] + " at row " + row + ", col " + col;
// 				// Look for this player in our array
// 				foundEm = false;
// 				for(var player in players)
// 				{
// 					if(players[player].piece == board[row][col])
// 					{
// 						++players[player].score;
// 						foundEm = true;
// 						break;
// 					}
// 				}
// 				if(!foundEm)
// 				{
// 					players.push({piece:board[row][col], score:1});
// 				}
// 			}
// 		}
// 	}
// }

// alert(winKind.substring(2, winKind.length));

// // Now show the overall scores as well
// scores = "";
// for(var player in players)
// 	scores += ", " + players[player].piece + ": " + players[player].score;

// alert("Scores: " + scores.substring(2, scores.length));