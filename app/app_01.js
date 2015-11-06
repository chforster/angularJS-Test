/**
 * Created by devebiz on 11/6/15.
 */
angular
    .module("app", [])
    .controller("myController", function ($scope, datenQuelle) {
        $scope.liste = datenQuelle.getListe();
    })
    .factory("datenQuelle", function () {
        var liste = ["Eier", "Butter", "Brot"];
        return Object.create({
            getListe: function () {
                return liste.slice();
            }
        });
    });