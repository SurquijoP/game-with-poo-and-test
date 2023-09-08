export class Origin {
    constructor(origin) {
        this.origin = origin;
        this.locate = "world: ";
    }
    setOrigin(name) {
        if (name === "Gandalf") this.locate = "Out World: ";
        return (this.locate += this.origin);
    }

    getOrigin() {
        console.log(this.locate);
    }
}

export const instanceOrigin = (origin, name) => {
    const newOrigin = new Origin(origin);
    newOrigin.setOrigin(name);
    return newOrigin;
};
