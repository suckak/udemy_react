/**
 * Created by Daniel_Gutierrez on 2/17/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCwnhIOdykYSssfxGaaTyJX-d9dePeSV84';

import SearchBar from './components/search_bar'

const App = () => (
    <div>
        <SearchBar/>
    </div>
);

ReactDOM.render(<App/>,document.querySelector('.container'));