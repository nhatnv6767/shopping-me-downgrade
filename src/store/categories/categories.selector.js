import {createSelector} from "reselect";

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = (state) => {
    console.log("selector fired")
    return state.categories.categories.reduce(
        (acc, {title, items}) => {
            acc[title.toLowerCase()] = items;
            return acc;
        },
        {}
    );
};
