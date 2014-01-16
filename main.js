function allCTRL($scope) {
	$scope.board = [];
	$scope.xTurn = {val:true};
	gameover = false;

	$scope.makeBoard = function () {
		for (var i = 0; i < ($scope.xsquared * $scope.xsquared); i++) {
			$scope.board.push('');
		}
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