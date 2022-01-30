import { Item } from './item'

function listSort(list, key) {
    return list.sort((a, b) =>
     (a.position > b.position)
     ? 1 : ((b.position > a.position)
     ? -1 : 0))


}

export { listSort };