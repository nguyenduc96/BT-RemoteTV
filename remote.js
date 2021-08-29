class Remote {
    id;
    changeChanel;
    changeVolume;


    constructor(id, changeChanel, changeVolume) {
        this.id = id;
        this.changeChanel = changeChanel;
        this.changeVolume = changeVolume;
    }


    getId() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }

    getChangeChanel() {
        return this.changeChanel;
    }

    setChangeChanel(value) {
        this.changeChanel = value;
    }

    getChangeVolume() {
        return this.changeVolume;
    }

    setChangeVolume(value) {
        this.changeVolume = value;
    }
}