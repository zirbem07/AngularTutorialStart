//Could declare angular.module right here
function tutorialCtrl($scope) {  //be sure to include the scope parameter. whatever scope is...

	$scope.superhero = [{name: "Spiderman",
						type: "hero"}];
	$scope.alerts = false;
	$scope.types = '';
	//make sure this function has the same name as the ng-click attribute associated with your add hero button
	/* ex: $scope.addHero */ = function(){
		if($scope. /*ng-model attr of 'name' input field*/ || $scope. /*ng-model attr of 'type' input field*/ ){
			//add something here to clear the name field, maybe just modify the item you added?
		} else {
			$scope.alerts = true;
		}
	}
}