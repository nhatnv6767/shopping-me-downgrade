import {createSelector} from "reselect";

const selectCategoryReducer = (state) => state.categories


export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

/*
 Miễn là mảng categories không thay đổi, đừng chạy lại phương thức này
* */

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce(
        (acc, {title, items}) => {
            acc[title.toLowerCase()] = items;
            return acc;
        },
        {}
    )
)
