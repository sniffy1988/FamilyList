function BuyService($firebase, $firebaseArray, $log, $q) {
    var url = 'https://familylistios.firebaseio.com/list/';
    var ref = new Firebase(url);

    function _getItemsList() {
        var defer = $q.defer();
        var list = $firebaseArray(ref).$loaded().then(defer.resolve).catch(defer.reject);
        return defer.promise;
    }

    return {
        getItems: _getItemsList
    }
}
angular
    .module('starter')
    .service('BuyService', BuyService);