import { writable } from "svelte/store";

const navigationStore = writable(
    {from:null, to:null}
);

export default navigationStore;