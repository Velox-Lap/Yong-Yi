import { describe, expect, it } from "vitest";
import {
  filterMemoryPreviews,
  memoryCategories,
  memoryPreviews,
} from "./experience";

describe("memory preview data", () => {
  it("contains only clearly marked placeholder records", () => {
    expect(memoryPreviews.length).toBeGreaterThan(0);
    expect(memoryPreviews.every((item) => item.status === "placeholder")).toBe(true);
  });

  it("provides the complete filter set", () => {
    expect(memoryCategories).toEqual(["All", "Letters", "Places", "Moments"]);
  });

  it("returns all previews for the All category", () => {
    expect(filterMemoryPreviews(memoryPreviews, "All")).toHaveLength(memoryPreviews.length);
  });

  it("filters previews without inventing additional records", () => {
    const places = filterMemoryPreviews(memoryPreviews, "Places");
    expect(places.length).toBe(2);
    expect(places.every((item) => item.category === "Places")).toBe(true);
  });
});