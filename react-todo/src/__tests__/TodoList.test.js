import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders TodoList with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Write Tests" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Write Tests")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Build a Todo App");
  const deleteButton = todoItem.querySelector("button") || todoItem.nextSibling;
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
});



