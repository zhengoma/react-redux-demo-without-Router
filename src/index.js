import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';  
import './common.css'; //全局引入css文件
import reducer from './reducer.js';
import App from './store.js';
import registerServiceWorker from './registerServiceWorker';

//store  
let store = createStore(reducer);

//渲染组件  
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();