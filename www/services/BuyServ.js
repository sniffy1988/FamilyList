function BuyService($firebase, $firebaseArray, $log, $q) {
    var url = 'https://familylistios.firebaseio.com/list/';
    var ref = new Firebase(url);

    function _getItemsList() {
        var defer = $q.defer();
        var list = $firebaseArray(ref).$loaded().then(defer.resolve).catch(defer.reject);
        return defer.promise;
    }

    function _add(item) {
        var defer = $q.defer();
        var list = $firebaseArray(ref).$add(item);
    }

    return {
        getItems: _getItemsList,
        addItem: _add
    }
}
angular
    .module('starter')
    .service('BuyService', BuyService);