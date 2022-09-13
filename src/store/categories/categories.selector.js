import {createSelector} from "reselect";

const selectCategoryReducer = (state) => {
    console.log("Selector 1 fired")
    return state.categories
}

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        console.log("Selector 2 fired")
        return categoriesSlice.categories
    }
)

/*
 Miễn là mảng categories không thay đổi, đừng chạy lại phương thức này
* */

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        console.log("Selector 3 fired")
        return categories.reduce(
            (acc, {title, items}) => {
                acc[title.toLowerCase()] = items;
                return acc;
            },
            {}
        )
    }
)
