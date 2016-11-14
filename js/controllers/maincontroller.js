/**
 * Created by jaWeber on 11/13/16.
 */

app.controller('MainController', ['$scope',
    function($scope) {
        $scope.title = 'Mowing Cost Estimator';
        $scope.sections = [
            {
                stitle: 'Front Yard',
                labelL: 'Length',
                labelW: 'Width',
                idL : 'fylength',
                idW : 'fywidth'
            },
            {
                stitle: 'Right Side Yard',
                labelL: 'Length',
                labelW: 'Width',
                idL : 'rsylength',
                idW : 'rsywidth'
            },
            {
                stitle: 'Left Side Yard',
                labelL: 'Length',
                labelW: 'Width',
                idL : 'lsylength',
                idW : 'lsywidth'
            },
            {
                stitle: 'Back Yard',
                labelL: 'Length',
                labelW: 'Width',
                idL : 'bylength',
                idW : 'bywidth'
            }
        ];
    }]);