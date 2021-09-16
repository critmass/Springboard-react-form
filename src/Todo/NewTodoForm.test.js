import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

describe("NewTodoForm", () => {
    it("should render", () => {
        render(<NewTodoForm/>)
    })
})