
import './App.css';



import {Provider} from 'react-redux';
import store from './redux/Store.js';
import Main_page from './Mainpage.js';
import Main2 from './Main2';
function App() {

  return (
    <Provider store={store}>
      <div id="page">
        {/* <div> */}
            <Main2 />
        {/* </div> */}
      </div>
    </Provider>
  );
}

export default App;
