import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Overview from './Pages/Overview/Overview';
import Staff from './Pages/Staff/Staff';
import Mark from './Pages/Mark/Mark';
import Timeline from './Pages/Timeline/Timeline';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Overview /> }/>
            <Route path='/overview' element={<Overview /> } />
            <Route path='/' element = {<App />}>
                <Route path='staff' element = {<Staff />}/>
                <Route path='mark' element = {<Mark />}/>
                <Route path='timeline' element = {<Timeline />}/>
            </Route>
        </Routes>
    </BrowserRouter>
);