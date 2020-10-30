import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const formHeader = screen.getByText(/Checkout Form/i)

    expect(formHeader).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstInput = screen.getByLabelText(/first name/i)
    const lastInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    // const stateInput = screen.getByLabelText(/stated/i) // should make test fail and does 
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const checkout = screen.getByRole('button')
    

    fireEvent.change(firstInput, {target: {value: 'Sterling', name: 'firstName'}})
    fireEvent.change(lastInput, {target: {value: 'Mount', name: 'lastName'}})
    fireEvent.change(addressInput, {target: {value: '123 Main St.', name: 'address'}})
    fireEvent.change(cityInput, {target: {value: 'Nashville', name: 'city'}})
    fireEvent.change(stateInput, {target: {value: 'TN', name: 'state'}})
    fireEvent.change(zipInput, {target: {value: '37203', name: 'zip'}})

    fireEvent.click(checkout)

    const successMessage = screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    // expect(successMessage).toNotBeTruthy() // should make test fail and does 
    expect(successMessage).toBeTruthy()

});
