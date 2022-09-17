import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {fetchCategoriesFailed, fetchCategoriesSuccess} from "./categories.action";
import {takeLatest, all, call, put} from "redux-saga/effects"
import {CATEGORIES_ACTION_TYPES} from "./categories.types"


export function* fetchCategoriesAsync(){
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, )
}

export function* categoriesSaga(){
    yield all([])
}