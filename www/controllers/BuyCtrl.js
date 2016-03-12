function BuyCtrl(BLANK_BUY_ITEM, $log, BuyService) {
    var buy = this;
    buy.list = [];
    var blank_item = BLANK_BUY_ITEM;
    buy.model = '';
    buy.item = {
        name: buy.model,
        isDone: false
    };
    function _updateList() {
        var buyPromice = BuyService.getItems();
        buyPromice.then(function (data) {
            $log.debug(data);
            buy.list = data;
        }).catch(function (reason) {
            $log.error(reason);
        })
    }

    function _resetItem() {
        angular.copy(blank_item, buy.item);
    }

    _updateList();
    buy.add = function () {
        if (buy.model !== '') {
            buy.item.name = buy.model;
            buy.list.push(angular.copy(buy.item));
            buy.model = '';
        }
    }
}
angular
    .module('starter')
    .controller('BuyCtrl', BuyCtrl);