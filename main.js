function allCTRL($scope) {
	$scope.board = [];
	$scope.xTurn = {val:true};
	gameover = false;

	$scope.makeBoard = function () {
    	var result = new Array();
			for(var i = 0; i < ($scope.xsquared); i++) {
			  var arr = new Array();
			  for(var j = 0; j < ($scope.xsquared); j++) {
			    arr.push('');
			  }
			  result.push(arr);
		}
		$scope.board = result	
	}

	$scope.mainSize = function () {
		return {
			width: ($scope.xsquared * 62) + 'px',
			height: ($scope.xsquared * 62) + 'px',
		};
	}

	$scope.rowSize = function () {
		return {
			width: ($scope.xsquared * 62) + 'px',
			height: (62) + 'px',
		};
	}
	
	$scope.ticClick = function(r, c){
		if ($scope.board[r][c] == '')
			$scope.xTurn.val = !$scope.xTurn.val;
			if ($scope.xTurn.val == true)
				$scope.board[r][c] = 'X';
			else
				$scope.board[r][c] = 'O';
	};
}