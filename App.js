import * as React from 'react';
import Router from './src/settings/router';
import {Provider} from 'mobx-react';
import rootStore from './src/settings/stores'

export default function App() {
    return (
        <Provider {...rootStore}>
            <Router/>
        </Provider>
    );
}