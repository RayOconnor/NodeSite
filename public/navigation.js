var app = angular.module('myApp', []);

app.controller("Ctrl1",function($scope){
  $scope.contents = {
		name : 'Work Experience',
		isDropdown: true,
		dropdownValues: ['HubSpot | June 2016 - Dec 2016', 'HubSpot | May  2015 - Dec 2015', 'Goldman Sachs | July  2014 - Dec 2014']
  };
  $scope.navBarData = [
	  {
			name : 'Work Experience',
			path : '/work-experience',
			isDropdown: false,
			dropdownValues: ['HubSpot | June 2016 - Dec 2016', 'HubSpot | May  2015 - Dec 2015', 'Goldman Sachs | July  2014 - Dec 2014']
	  },
	  {
	  	name : 'Education',
	  	path : '/education',
			isDropdown: false,
	  	dropdownValues: []
	  },
	  {
			name : 'Mentorship',
			path : '/mentorship',
			isDropdown: false,
			dropdownValues: ['Fellow | Jan 2016 - April 2016', 'Tutor  | Jan 2014 - April 2014 Surfing']
	  },
	  {
			name : 'Hobbies',
			path : '/hobbies',
			isDropdown: false,
			dropdownValues: ['Performing', 'Kite Surfing', 'Running']
	  } 
	];
});

app.directive('navbar', function() {

  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: '/navigation.html',
    scope: false
  };

});