import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
    it("should render", () => {
        render(<Todo/>)
    })
})