// Thêm vào giỏ hàng
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}
// Xóa khỏi giỏ hàng
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
