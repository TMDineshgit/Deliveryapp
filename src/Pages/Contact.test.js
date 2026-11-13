import Contact from "./Contact";
import {render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


describe("contact page testing", ()=>{

    // test or it same 
    test("loaded on DOM", () => {
        render(<Contact />);
        const title = screen.getByRole("heading")
        
        expect(title).toBeInTheDocument()
    })


    test("submit button ", () => {
        render(<Contact />);
        const buttonText = screen.getByText("Submit")
        
        expect(buttonText).toBeInTheDocument()
    })

    test("button element should present", () => {
        render(<Contact />);
        const button = screen.getByRole("button")
        
        expect(button).toBeInTheDocument()
    })

    test("should load 2 inputboxes", () => {
        render(<Contact />);

        //Querying --- react Elements 
        const inputbox = screen.getAllByRole("textbox")// multiple items with same role use getAllByRole

        expect(inputbox.length).toBe(2)
        
        // inputbox.forEach((box) => {
        //     expect(box).toBeInTheDocument();
        // });
    })
})
