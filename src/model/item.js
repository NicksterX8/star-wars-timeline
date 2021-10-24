"use strict";
exports.__esModule = true;
exports.Item = void 0;
var itemNode_1 = require("./itemNode");
var Item = /** @class */ (function () {
    function Item(title, id, medium, canontype) {
        this.nodes = [];
        this.title = title;
        this.medium = medium;
        this.canontype = canontype;
        this.id = id;
    }
    Item.prototype.createNode = function (position, date, publication) {
        var newNode = new itemNode_1.ItemNode(position, date, publication);
        this.nodes.push(newNode);
    };
    return Item;
}());
exports.Item = Item;
