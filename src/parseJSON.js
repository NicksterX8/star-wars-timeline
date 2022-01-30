
import { Item } from './model/item'

function parseJSON() {

    const itemData = require('./itemData.json')
    let itemList = []

    itemData.map((dataObject) => {
        itemList.push(dataObjectToItem(dataObject, itemList.length))
    })

    const result = itemList
    return result
    
}

function dataObjectToItem(dataObject, id) {

    let newItem = new Item(dataObject.name, id, dataObject.medium,
         dataObject.canonType)

    newItem.createNode(dataObject.date, dataObject.date, dataObject.publication)

    return newItem
}

const itemDataList = parseJSON()

export { itemDataList };