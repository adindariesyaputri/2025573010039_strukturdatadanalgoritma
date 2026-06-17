class HashMapLinearProbing {
    constructor(capacity = 8) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity).fill(null);
        this.DELETED = { deleted: true };
    }

    hash(key) {
        let hash = 0;

        for (let char of key.toString()) {
            hash += char.charCodeAt(0);
        }

        return hash % this.capacity;
    }

    set(key, value) {
        if (this.size / this.capacity > 0.7) {
            this.resize();
        }

        let index = this.hash(key);

        while (
            this.table[index] !== null &&
            this.table[index] !== this.DELETED &&
            this.table[index].key !== key
        ) {
            index = (index + 1) % this.capacity;
        }

        if (
            this.table[index] === null ||
            this.table[index] === this.DELETED
        ) {
            this.size++;
        }

        this.table[index] = { key, value };
    }

    get(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== null) {
            if (
                this.table[index] !== this.DELETED &&
                this.table[index].key === key
            ) {
                return this.table[index].value;
            }

            index = (index + 1) % this.capacity;

            if (index === start) break;
        }

        return undefined;
    }

    delete(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== null) {
            if (
                this.table[index] !== this.DELETED &&
                this.table[index].key === key
            ) {
                this.table[index] = this.DELETED;
                this.size--;
                return true;
            }

            index = (index + 1) % this.capacity;

            if (index === start) break;
        }

        return false;
    }

    resize() {
        const oldTable = this.table;

        this.capacity *= 2;
        this.table = new Array(this.capacity).fill(null);
        this.size = 0;

        for (const item of oldTable) {
            if (item && item !== this.DELETED) {
                this.set(item.key, item.value);
            }
        }
    }
}

// TESTING

const map = new HashMapLinearProbing();

map.set("A", 10);
map.set("B", 20);
map.set("C", 30);

console.log("Data A =", map.get("A"));
console.log("Data B =", map.get("B"));

map.delete("B");

console.log("Setelah delete B =", map.get("B"));