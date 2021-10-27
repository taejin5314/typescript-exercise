type Heros = "Hulk" | "Thor" | "Capt";

type HeroProfiles = { [K in Heros]: number };

const heroInfo: HeroProfiles = {
  Hulk: 54,
  Thor: 1000,
  Capt: 33,
};
