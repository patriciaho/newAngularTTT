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
		for( var i = 0; i < 3; i += 1) {
			a = 0; b = 0; d = 0; e = 0; f = 0; g = 0; h = 0; k = 0; l = 0; m = 0; n =0; p = 0;
			for (var j = 0; j < 3; j += 1) {
				//horizontal win from left
				if ($scope.board[row][cell+j] == player) {a += 1};
				//horizontal win from right
				if ($scope.board[row][cell-j] == player) {b += 1};
				//horizontal win from center
				if ($scope.board[row][cell+j-1] == player) {d += 1};
				//vertical win from bottom	
				if (row-j >= 0) {	
					if ($scope.board[row-j][cell] == player) {e += 1};
				}
				//vertical win from top
				if (row+j < $scope.xsquared) {	
					if ($scope.board[row+j][cell] == player) {f += 1};
				}
				//vertical win from center
				if (row+j-1 >= 0 && row+j-1 < $scope.xsquared) {
					if ($scope.board[row+j-1][cell] == player) {g += 1};
				}
				//diagonal down win from top
				if (row+j < $scope.xsquared) {
					if ($scope.board[row+j][cell+j] == player) {h += 1};
				}
				//diagonal down win from bottom 
				if (row-j >= 0) {
					if ($scope.board[row-j][cell-j] == player) {k += 1};
				}
				//diagonal down win from center
				if (row+j-1 >= 0 && row+j-1 < $scope.xsquared) {
					if ($scope.board[row+j-1][cell+j-1]) {l += 1};
				}
				//diagonal up win from top
				if (row-j >= 0) {
					if ($scope.board[row-j][cell+j] == player) {m += 1};
				}
				//diagonal up win from bottom
				if (row+j < $scope.xsquared) {
					if ($scope.board[row+j][cell-j] == player) {n += 1};
				}
				//diagonal up win from center
				if (row+j-1 >= 0 && row+j-1 < $scope.xsquared) {
					if ($scope.board[row+j-1][cell-j+1] == player) {p += 1};
				}
			};
			if (a == 3 || b == 3 || d == 3 || e == 3 || f == 3 || g == 3 || h == 3 || k == 3 || l == 3 || m == 3 || n == 3 || p == 3) {
					if (player == 'X') 
						$scope.xWins += 1;
					else
						$scope.oWins += 1;
				};
		};	
	};
}