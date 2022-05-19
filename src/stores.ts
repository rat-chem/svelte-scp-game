import { writable } from "svelte/store";


export let eventLogFlag = writable(0)


export let currentDoc = writable<Function>()


function createConfinementNode096() {
	const { subscribe, update } = writable([2, 2]);

	return {
		subscribe,
		update: (row: number, node: number) => update(n => n = [row, node]),
	};
}
export const confinementNode096 = createConfinementNode096()


function createSCPGeoCoords() {
	const { subscribe, update } = writable([25, 50]);

	return {
		subscribe,
		update: (latitude: number, longitude: number) => update(n => n = [latitude, longitude]),
	};
}
export const SCPGeoCoords = createSCPGeoCoords()

