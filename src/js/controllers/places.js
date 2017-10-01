angular
  .module('itineraryApp')
  .controller('PlacesIndexCtrl', PlacesIndexCtrl);

PlacesIndexCtrl.$inject= ['$scope'];
function PlacesIndexCtrl($scope) {
  const vm = this;
  vm.all =[];
  vm.places= {
    Bar: 'bar',
    Bowling: 'bowling_alley',
    Gallery: 'art_gallery',
    Cafe: 'cafe',
    Casino: 'casino',
    Club: 'night_club'
  };
  console.log($scope.places);
}
