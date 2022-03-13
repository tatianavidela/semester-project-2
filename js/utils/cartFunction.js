export function getExistingCart() {
    const added = localStorage.getItem("addedProducts");

    if (!favs) {
        return [];
    } else {
        return JSON.parse(added);
    }
}