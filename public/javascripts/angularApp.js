/* 
 * Angular app
 * 
 */
var backendMobilite = angular.module('backendMobilite', []);

function deviceController($scope, $http) {
    $scope.formData = {};
    $scope.loading = false;
    $http.get('http://cisweb3.sogedo.lan:8080/rest/devices?size=1000')
        .success(function(data) {
            //console.log(data);
            $scope.devices = data._embedded.devices;
            $scope.loading = true;
        })
        .error(function(data) {
            console.log('Error: ' + data);
            $scope.loading = true;
        });
}

function paramIncidentsController($scope, $http) {
    $scope.formData = {};
    $scope.loading = false;
    $http.get('http://cisweb3.sogedo.lan:8080/rest/paramIncidents?size=100')
        .success(function(data) {
            $scope.paramIncidents = data._embedded.paramIncidents;
            $scope.loading = true;
        })
        .error(function(data) {
            console.log('Error: ' + data);
            $scope.loading = true;
        });
}