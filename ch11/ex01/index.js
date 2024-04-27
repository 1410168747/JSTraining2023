export default class TypeMap {

    #map = new Map();

    set(key, value) {
        if (!this.isKeyConstructor(key)) {
            throw new Error('Type Error');
        }
        if (value instanceof key) {
            return this.#map.set(key, value);
        }
        if ((typeof value).toUpperCase() === key.name.toUpperCase()) {
            return this.#map.set(key, value);
        }
        throw new Error('Type Error');
    }

    isKeyConstructor(key) {
        return typeof key === "function";
    }

    get(key) {
        return this.#map.get(key);
    }
}