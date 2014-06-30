//Could declare angular.module right here
function tutorialCtrl($scope) {

	$scope.superhero = [{name: "Spiderman",
						type: "hero"}];
	$scope.alerts = false;
	$scope.types = '';
	//make sure this function has the same name as the ng-click attribute associated with your button
	$scope.addSuperhero = function(){
		if($scope.name || $scope.type){
			$scope.superhero.push({
				name: $scope.name,
				type: $scope.type
			});
			//add something here to clear the name field, maybe just modify the item you added?
			$scope.name = "";
			$scope.type = "";
		} else {
			$scope.alerts = true;
		}
	}
}