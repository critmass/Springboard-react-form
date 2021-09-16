import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

describe("NewBoxForm", () => {
    it("should render", () => {
        render(<NewBoxForm />)
    })
})