function allCTRL($scope) {
	$scope.board = [];
	$scope.xTurn = {val:true};
	gameover = false;

	$scope.makeBoard = function () {
		// for (var i = 0; i < ($scope.xsquared); i++) {
		// 	$scope.board.push('');
		// }

		// for(i = 0; i < ($scope.xsquared); i++) {
  //       	$scope.board.push([null]);
  //       	$scope.board[i].push
  //       	// for (j = 0; j < ($scope.xsquared); j++) {
  //       	// 	$scope.board[j].push(null);
  //       	// }
  //   	}

    	var result = new Array();

			for(var i = 0; i < ($scope.xsquared); i++) {
			  var arr = new Array();
			  for(var j = 0; j < ($scope.xsquared); j++) {
			    arr.push('');
			  }
			  result.push(arr);
		}

		$scope.board = result

    	// console.log($scope.board[i])

    	// for(i = 0; i < ($scope.xsquared); i++) {
     //    	$scope.board[i].push('hi');
    	// }
    	// console.log($scope.board)

		// for (var i = 0; i < ($scope.xsquared); i++) {
		// 		$scope.board[i].push('');
		// }
		
	}

	$scope.mainSize = function () {
		return {
			width: ($scope.xsquared * 62) + 'px',
			height: ($scope.xsquared * 62) + 'px',
		};
	}
	
	$scope.ticClick = function($index){
		if ($scope.board[$index] == '')
			$scope.xTurn.val = !$scope.xTurn.val;
			if ($scope.xTurn.val == true)
				$scope.board[$index] = 'X';
			else
				$scope.board[$index] = 'O';

		// $scope.board[$index] = ($scope.board[$index] == '' ? (($scope.xTurn.val = !$scope.xTurn.val) ? 'X' : 'O' ) : $scope.board[$index]);
		// alert($index+(2*$scope.xsquared));
		if ($scope.board[$index] == 'X' && 
			$scope.board[$index+1] == 'X' && 
			$scope.board[$index+2] == 'X')
			alert('Xwins!');
		if ($scope.board[$index] == 'X' && 
			$scope.board[$index-1] == 'X' && 
			$scope.board[$index-2] == 'X')
			alert('Xwins!');
		if ($scope.board[$index] == 'X' && 
			$scope.board[$index-1] == 'X' && 
			$scope.board[$index+1] == 'X')
			alert('Xwins!');
		if ($scope.board[$index] == 'X' && 
			$scope.board[$index + $scope.xsquared] == 'X' && 
			$scope.board[$index + (2*$scope.xsquared)] == 'X')
			alert('Xwins!');
		if ($scope.board[$index] == 'X' && 
			$scope.board[$index - $scope.xsquared] == 'X' && 
			$scope.board[$index - (2*$scope.xsquared)] == 'X')
			alert('Xwins!');
		if ($scope.board[$index] == 'X' && 
			$scope.board[$index - $scope.xsquared] == 'X' && 
			$scope.board[$index + $scope.xsquared] == 'X')
			alert('Xwins!');
		if ($scope.board[$index] == 'X' && 
			$scope.board[$index + $scope.xsquared + 1] == 'X' && 
			$scope.board[$index + (2*($scope.xsquared)) +2] == 'X')
			alert('Xwins!');
		if ($scope.board[$index] == 'O' && 
			$scope.board[$index+1] == 'O' && 
			$scope.board[$index+2] == 'O')
			alert('Owins!');
		if ($scope.board[$index] == 'O' && 
			$scope.board[$index-1] == 'O' && 
			$scope.board[$index-2] == 'O')
			alert('Owins!');
		if ($scope.board[$index] == 'O' && 
			$scope.board[$index-1] == 'O' && 
			$scope.board[$index+1] == 'O')
			alert('Owins!');
		if ($scope.board[$index] == 'O' && 
			$scope.board[$index + $scope.xsquared] == 'O' && 
			$scope.board[$index + (2*$scope.xsquared)] == 'O')
			alert('Owins!');
		if ($scope.board[$index] == 'O' && 
			$scope.board[$index - $scope.xsquared] == 'O' && 
			$scope.board[$index - (2*$scope.xsquared)] == 'O')
			alert('Owins!');
		if ($scope.board[$index] == 'O' && 
			$scope.board[$index - $scope.xsquared] == 'O' && 
			$scope.board[$index + $scope.xsquared] == 'O')
			alert('Owins!');
	};
}