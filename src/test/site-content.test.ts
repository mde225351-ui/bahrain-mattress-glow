import { describe, expect, it } from "vitest";

import { brand, reelSlots } from "@/lib/site-content";

describe("ANABIYA HOMES supplied business details", () => {
  it("keeps exactly three empty reel slots", () => {
    expect(reelSlots).toHaveLength(3);
  });

  it("uses the supplied booking contact information", () => {
    expect(brand.phoneDisplay).toBe("+973 3366 5662");
    expect(brand.phoneLink).toBe("+97333665662");
    expect(brand.email).toBe("anabiyahomeshomes@gmail.com");
  });

  it("describes the supplied service and service area", () => {
    expect(brand.location).toBe("Bahrain");
    expect(brand.tagline).toBe("Wake Up Fresh with a Cleaner Mattress!");
  });
});