var app = angular.module('gifD', []);

app.controller('GifController', function($scope, $http) {
  $scope.search = "";

  $scope.getGif = function(search) {
    console.log("getGif function ran")
    $scope.searchData = [];
    $scope.showRandom = false;
    // Chek to see if search is empty
    if (search != "") {
      // Set the api search
      var searchApi = 'http://api.giphy.com/v1/gifs/search?q=' + search +'&api_key=dc6zaTOxFJmzC';

      // Get information
      $http.get(searchApi).then(function(response) {
        // console.log(response);

        // Set array to
        $scope.searchData = response.data.data;

        // Hides the random image
        $scope.showRandom = false;
      });
    } else {
      // Get random image
      $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
        $scope.searchData = response.data.data;
        console÷.log(response);

        // Show the random image
        $scope.showRandom = true;
      });
    }
  };
});
