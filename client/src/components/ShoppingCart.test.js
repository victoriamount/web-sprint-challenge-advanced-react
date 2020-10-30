import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCart from './ShoppingCart';
// import { removeFromCart } from '../App'

const plants = [{"name":"Peperomia Rosso","id":143,"scientificName":"Peperomia caperata rosso","difficulty":"easy","light":"direct","img":"https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590","sizes":["small"],"watering":2,"description":"Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.","price":21}];

test('the shopping cart appears with items in it', () => {
    render(<ShoppingCart cart={plants} />)

    const peperomiaTitle = screen.getByText(/peperomia/i)
    expect(peperomiaTitle).toBeTruthy()
    // expect(peperomiaTitle).toBeFalsy() // should make test fail and does 
})

// test('items can be removed from the shopping cart', async () => {
//     const { getByText } = render(<ShoppingCart cart={plants} />)

//     const peperomiaTitle = screen.getByText(/peperomia/i)
//     expect(peperomiaTitle).toBeTruthy()

//     // const removeButton = await screen.getByText(/Remove/i)


//     fireEvent.click(screen.getByText(/Remove/i))
    
//     // expect(peperomiaTitle).toBeTruthy()

//     const newPeperomiaTitle = await screen.findAllByText(/peperomia/i)
//     expect(newPeperomiaTitle).toBeFalsy()

// })