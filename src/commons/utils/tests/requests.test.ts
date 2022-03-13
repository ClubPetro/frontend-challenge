import {
  postCard,
  getAllCards,
  getCardId,
  patchCardId,
} from "./../../../services/cards/index";
import { getAllCountries } from "./../../../services/countries/index";

describe("testing request for get all countries", () => {
  it("should be > 0 the return of get all countries", async () => {
    const data = await getAllCountries();
    expect(data.length).toBeGreaterThan(0);
  });
});

describe("testing request cards", () => {
  it("should create a card of countrie, locale and goal", async () => {
    const data = await postCard({
      local: "Toronto",
      meta: "02/2022",
      checkboxPais: "Canada",
      img: "https://flagcdn.com/ca.svg",
    });

    expect([data].length).toBeGreaterThan(0);
  });

  it("should get all cards", async () => {
    const data = await getAllCards();
    expect(data.length).toBeGreaterThan(0);
  });

  it("should get especific card", async () => {
    await expect(getCardId(1)).resolves.toStrictEqual([
      {
        checkboxPais: "Canada",
        id: 1,
        img: "https://flagcdn.com/ca.svg",
        local: "Toronto",
        meta: "02/2022",
      },
    ]);
  });

  it("should edit especific card", async () => {
    await expect(
      patchCardId(2, {
        checkboxPais: "Canada",
        img: "https://flagcdn.com/ca.svg",
        local: "Alberta",
        meta: "02/2022",
      })
    ).resolves.toStrictEqual({
      checkboxPais: "Canada",
      id: 2,
      img: "https://flagcdn.com/ca.svg",
      local: "Alberta",
      meta: "02/2022",
    });
  });
});
export {};
