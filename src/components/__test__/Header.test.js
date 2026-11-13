import { render } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../../store/appStore";

describe("Header Component", () => {
    it("is online or offline",()=>{

        render(
            <Provider store={appStore}>
                <Header />
            </Provider> 
            
        )


    })
})