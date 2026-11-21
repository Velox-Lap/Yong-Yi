export type MemoryCategory = "All" | "Letters" | "Places" | "Moments";

export type MemoryPreview = {
  id: string;
  title: string;
  description: string;
  category: Exclude<MemoryCategory, "All">;
  art: string;
  status: "placeholder";
};

export const memoryCategories: MemoryCategory[] = ["All", "Letters", "Places", "Moments"];

export const memoryPreviews: MemoryPreview[] = [
  {
    id: "memory-placeholder-01",
    title: "A place to begin",
    description: "A placeholder for an owner-provided story or image.",
    category: "Places",
    art: "one",
    status: "placeholder",
  },
  {
    id: "memory-placeholder-02",
    title: "Words worth keeping",
    description: "A placeholder for a letter or meaningful note.",
    category: "Letters",
    art: "two",
    status: "placeholder",
  },
  {
    id: "memory-placeholder-03",
    title: "A quiet afternoon",
    description: "A placeholder for an authentic moment.",
    category: "Moments",
    art: "three",
    status: "placeholder",
  },
  {
    id: "memory-placeholder-04",
    title: "Somewhere in the archive",
    description: "A placeholder for a location or shared story.",
    category: "Places",
    art: "four",
    status: "placeholder",
  },
  {
    id: "memory-placeholder-05",
    title: "A note for later",
    description: "A placeholder for owner-authored words.",
    category: "Letters",
    art: "five",
    status: "placeholder",
  },
  {
    id: "memory-placeholder-06",
    title: "An ordinary wonder",
    description: "A placeholder for an owner-confirmed moment.",
    category: "Moments",
    art: "six",
    status: "placeholder",
  },
];

export function filterMemoryPreviews(
  items: MemoryPreview[],
  category: MemoryCategory,
): MemoryPreview[] {
  if (category === "All") return items;
  return items.filter((item) => item.category === category);
}