import { render, screen } from "@testing-library/react";
import App from "../App";
import callSwapi from "../utils/callSwapi";

// Check api data to see if they receive same count
describe("Count test", () => {
  test("Films Count", async () => {
    const data = await callSwapi("films", 1);
    expect(data.count).toBe(6);
  });

  test("People Count", async () => {
    const data = await callSwapi("people", 1);
    expect(data.count).toBe(82);
  });

  test("Planets Count", async () => {
    const data = await callSwapi("planets", 1);
    expect(data.count).toBe(60);
  });

  test("Species Count", async () => {
    const data = await callSwapi("species", 1);
    expect(data.count).toBe(37);
  });

  test("Starships Count", async () => {
    const data = await callSwapi("starships", 1);
    expect(data.count).toBe(36);
  });
  test("Vehicles Count", async () => {
    const data = await callSwapi("vehicles", 1);
    expect(data.count).toBe(39);
  });
});

// Check api data to see if they have an object property we expect
describe("Count test", () => {
  test("renders star wars link", () => {
    render(<App />);
    const linkElement = screen.getByText(/star wars/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Films title exists", async () => {
    const data = await callSwapi("films", 1);
    expect(data.results[0]).toHaveProperty("title");
  });

  test("People name exists", async () => {
    const data = await callSwapi("people", 1);
    expect(data.results[0]).toHaveProperty("name");
  });

  test("Planets name exists", async () => {
    const data = await callSwapi("planets", 1);
    expect(data.results[0]).toHaveProperty("name");
  });

  test("Species name exists", async () => {
    const data = await callSwapi("species", 1);
    expect(data.results[0]).toHaveProperty("name");
  });

  test("Starships name exists", async () => {
    const data = await callSwapi("starships", 1);
    expect(data.results[0]).toHaveProperty("name");
  });

  test("Vehicles name exists", async () => {
    const data = await callSwapi("vehicles", 1);
    expect(data.results[0]).toHaveProperty("name");
  });
});
