import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Routing from './component/Routing';
const conatiner = document.getElementById('root');
const root = ReactDOM.createRoot(conatiner);

// view is connecting to store
root.render(
    <Provider store={store}>
        <Routing/>
    </Provider>
)