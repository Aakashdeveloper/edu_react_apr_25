import React from 'react';
import ProductDisplay from '../component/ProductDisplay';
import {render} from '@testing-library/react';

describe('Product Display Snapshot',() => {

    let mockData = [
        {
            "id":1,
            "brand":"3M",
            "discount":"Less than 10%",
            "form": "Mask",
            "uses":"Respiratory Care",
            "name":"3M 9004IN Particle Respirator Mask",
            "image":"https://i.ibb.co/8BJhgK2/r6xkegcloxgn5eq8owwg.jpg",
            "description":"box of 10 masks",
            "cost":180
        },
        {
            "id":2,
            "brand":"Vogmask",
            "discount":"10% and above",
            "form": "Mask",
            "uses":"Respiratory Care",
            "name":"Vogmask Vector Havoc N99CV Mask Large",
            "image":"https://i.ibb.co/fHQ8JY4/kclatp7d9dt0dwgu4zkq.jpg",
            "description":"box of 10 masks",
            "cost":200
        }
    ]
    test('Testing Footer',() => {
        const {asFragment} = render(<ProductDisplay products={mockData}/>)
        expect(asFragment()).toMatchSnapshot()
    })
})
