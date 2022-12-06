import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        
        {props.children}
    </div>
)

export { Layout, Navigation, Footer };