import { createStore } from '@reduxjs/toolkit';
import reducers from './reducers/index.js';

const store = createStore(reducers, {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// import { configureStore } from '@reduxjs/toolkit'
// import productSlice from './Slice/productSlice';

// const store = configureStore({
//   reducer: {
//     product: productSlice,
//   },
// })

// export default store;