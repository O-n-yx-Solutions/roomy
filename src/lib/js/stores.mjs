import { Writable, writable } from "svelte/store";

export const userStore = writable({isLoggedIn: false, user: null})