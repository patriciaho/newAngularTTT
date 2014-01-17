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
	
	$scope.ticClick = function(r, c){
		if ($scope.board[r][c] == '')
			$scope.xTurn.val = !$scope.xTurn.val;
			if ($scope.xTurn.val == true)
				$scope.board[r][c] = 'X';
			else
				$scope.board[r][c] = 'O';
	};

	//Win Logic
	$scope.checkWin = function(r, c, player) {
		for( var i = 0; i < 3; i++) {
			a = 0; b = 0; d = 0; e = 0; f = 3;
			for (var j = 0; j < 3; j++) {
				//horizontal win from left
				if ($scope.board[r+i][c+j] == player) {a++}
				//horizontal win from right
				if ($scope.board[r-i][c-j] == player) {b++}
				//horizontal win from center
				if ($scope.board[r-i][c-j] == player) {d++}
				//vertical win from top
				if ($scope.board[r+j][c+i] == player) {e++}
				//vertical win from bottom
				if ($scope.board[r-j][c-i] == player) {f++}
			};
			if (a == 3 || b == 3 || d == 3 || e == 3 || f == 3) {
				if (player == 'X')
					{$scope.xWins++};
				if (player == 'O')
					{$scope.oWins++};
			};
		};	
	};
}