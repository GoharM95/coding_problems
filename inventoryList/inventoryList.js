function inventoryList() {
  let inventory = [];

  return {
    addName: (name) => {
      return !inventory.includes(name) ? inventory.push(name) : inventory;
    },
    removeName: (name) => {
      if (inventory.includes(name)) {
        const filteredInventory = inventory.filter((item) => name !== item);
        inventory = filteredInventory;
      }
      return inventory;
    },
    getList: () => {
      return inventory;
    },
  };
}

const list = inventoryList();

list.addName("Gohar");
list.addName("Sara");
console.log(list.getList());

list.addName("Anna");
console.log(list.getList());

list.removeName("Anna");
console.log(list.getList());
