export const add = (x, y) =>   x + y

export const total = (shipping , subTotal) => {
    return '€' + add(shipping, subTotal)
}
