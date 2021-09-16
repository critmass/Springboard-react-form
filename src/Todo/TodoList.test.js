import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList", () => {
    it("should render", () => {
        render(<TodoList/>)
    })
})