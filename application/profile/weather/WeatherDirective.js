var WeatherDirective = angular.module('WeatherDirective', []);

WeatherDirective.directive( 'weather', function(
  $stateParams
  ) {
    return {
      restrict: 'AE',
      replace: true,
      
      template: '<div id="weather" class="show-weather">something</div>',
      scope: {
        details: '@details',
      },
      link: function(scope, elem, attrs) {
        console.log(scope.details);
        var location = scope.details;
        console.log(location);
        $.simpleWeather({
                location: location,
        //     woeid: '',
        //     unit: 'f',
            success: function(weather) {

              html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
          
              $(".show-weather").html(html);
            },
            error: function(error) {
              $(".show-weather").html('<p>'+error+'</p>');
            }
          });
      }
    }

  });