import { maxId } from "./apis/pokeAPI";

export default function loadInitialState() {
  const save = JSON.parse(localStorage.getItem("save"));
  return {
    settings: {
      bgMusic: (save && save.bgMusic) || false,
    },
    session: {
      score: save?.session.score ?? 0,
      round: save?.session.round ?? 0,
      cards: save?.session.cards ?? [],
    },
    progress: {
      highest: save?.highest ?? { score: 0, round: 0 },
      dexEntries: save?.dexEntries ?? { found: 0, entries: Array(maxId).fill({ name: null }) },
    },
  };
}
