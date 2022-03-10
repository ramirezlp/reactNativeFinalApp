export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = (id) => {
    console.log(id)
    return ({
    type: SELECT_CATEGORY,
    categoryId: id
}) }