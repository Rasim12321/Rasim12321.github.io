

export const addGoods = (articul, title, image) => ({
    //промежуточная обработка данных 
    type: 'ADD_GOODS',
    articul,
    title,
    image
})