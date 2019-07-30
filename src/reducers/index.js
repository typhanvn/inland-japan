import {combineReducers} from 'redux';
import bannerReducer from './banners';
import productReducer from './products';
import productCatReducer from './product_cats';
import newsReducer from './news';
import uiReducer from './ui';
import contactReducer from './contacts';

const rootReducer = combineReducers({
  banners: bannerReducer,
  products: productReducer,
  product_cats: productCatReducer,
  news: newsReducer,
  ui: uiReducer,
  contacts: contactReducer,
});

export default rootReducer;
