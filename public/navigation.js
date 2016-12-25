var app = angular.module('myApp', []);

app.directive('helloWorld', function() {
  
  var navigationTemplate = '<nav class="navbar navbar-default" role="navigation" style="padding-left:50px;">' +
          '<div class="container">' +
            '<div class="navbar-header">' +
              '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">' + 
                '<span class="sr-only">Toggle navigation</span>' +
                '<span class="icon-bar"></span>' +
                '<span class="icon-bar"></span>' +
                '<span class="icon-bar"></span>' +
              '</button>' +
              '<a class="navbar-brand" href="#"></a>' +
            '</div>' +
            '<div class="navbar-collapse collapse">' +
              '<ul class="nav navbar-nav navbar-right"> ' +
                '<li class="active"><a href="#">Home</a></li>' +
                '<li class="dropdown">' +
                  '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Work Experience<b class="caret"></b></a>' +
                  '<ul class="dropdown-menu">' +
                    '<li><a href="#">HubSpot | June 2016 - Dec 2016</a></li>' +
                    '<li><a href="#">HubSpot | May  2015 - Dec 2015</a></li> ' +
                    '<li><a href="#">Goldman Sachs | July  2014 - Dec 2014</a></li>  ' +
                  '</ul>' +
                '</li>' +
                '<li><a href="#">Education</a></li>   ' +             
                '<li class="dropdown">' +
                  '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Mentorship<b class="caret"></b></a>' +
                  '<ul class="dropdown-menu">' +
                    '<li><a href="#">Fellow | Jan 2016 - April 2016</a></li>' +
                    '<li><a href="#">Tutor  | Jan 2014 - April 2014</a></li>  ' +
                  '</ul>' +
                '</li>' +
                '<li class="dropdown">' +
                  '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Hobbies<b class="caret"></b></a>' +
                  '<ul class="dropdown-menu">' +
                    '<li><a href="#">Guitar</a></li>' 
                    '<li><a href="#">Running</a></li>' +  
                    '<li><a href="#">Kite Surfing</a></li> ' +
                  '</ul>' +
                '</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</nav>';


  return {
      restrict: 'AE',
      replace: 'true',
      template: navigationTemplate
  };
});