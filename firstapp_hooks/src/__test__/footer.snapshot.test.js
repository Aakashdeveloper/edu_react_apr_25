import React from 'react';
import Footer from '../component/Footer';
import {render} from '@testing-library/react';

describe('Snapshot',() => {
    test('Testing Footer',() => {
        const {asFragment} = render(<Footer/>)
        expect(asFragment()).toMatchSnapshot()
    })
    
})