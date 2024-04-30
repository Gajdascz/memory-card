import { maxId } from "./pokeAPI";

const data = {
  current: localStorage.getItem("save") ?? "",
  subscribers: [],
  sub: (cb) => data.subscribers.push(cb),
  unsub: (cb) => (data.subscribers = data.subscribers.filter((sub) => sub !== cb)),
  emit: () => data.subscribers.forEach((sub) => sub(data.current)),
  getStr: () => data.current,
  update: (jsonStr) => {
    localStorage.setItem("save", jsonStr);
    data.current = jsonStr;
    data.emit();
  },
  save: (newData) => data.update(JSON.stringify(newData)),
  reset: () => data.update(""),
  import: (file) => {
    if (!file || file.type !== "application/json") return null;
    const reader = new FileReader();
    reader.onload = (e) => data.update(e.target.result);
    reader.readAsText(file);
  },
  getObj: () => {
    const save = data.current.length > 0 ? JSON.parse(data.getStr()) : null;
    return {
      settings: {
        bgMusic: (save && save.bgMusic) || false,
      },
      session: {
        score: save?.session.score ?? 0,
        round: save?.session.round ?? 0,
        cards: save?.session.cards ?? [],
        clicked: save?.session.clicked ?? new Set(),
      },
      progress: {
        highest: save?.highest ?? { score: 0, round: 0 },
        dexEntries: save?.dexEntries ?? { found: 0, entries: Array(maxId).fill({ name: null }) },
      },
    };
  },
};

const save = (newData) => data.save(newData);
const importSave = (file) => data.import(file);
const clearSave = () => data.reset();
const getStr = () => data.getStr();
const getObj = () => data.getObj();
const sub = (cb) => data.sub(cb);
const unsub = (cb) => data.unsub(cb);

export { save, importSave, clearSave, getStr, getObj, sub, unsub };
