function BuyCtrl(BLANK_BUY_ITEM, $log) {
    var buy = this;
    buy.list = [];
    var blank_item = BLANK_BUY_ITEM;
    buy.model = '';
    buy.item = {
        name: buy.model,
        isDone: false
    };
    function _resetItem() {
        angular.copy(blank_item, buy.item);
    }

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