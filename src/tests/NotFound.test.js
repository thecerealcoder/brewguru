import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from "../components/NotFound.js"

describe('NotFound component', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NotFound/>, div);
    });
});

