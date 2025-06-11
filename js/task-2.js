class Storage {
    #items;   
    constructor(items){
        this.#items=items;
    };
    getItems(){
        return this.#items;
    };
    addItem(newItem){
        return this.#items.push(newItem);
    };
    removeItem(itemToRemove){
        if (this.#items.includes(itemToRemove)){
        const a = this.#items.indexOf(itemToRemove);
        return this.#items.splice(a, 1);
        };
    };
};



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
