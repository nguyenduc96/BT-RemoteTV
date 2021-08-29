class Tivi {
    channel;
    volume;
    status = false;

    constructor(channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }

    getChannel() {
        return this.channel;
    }

    setChannel(value) {
        this.channel = value;
    }

    getVolume() {
        return this.volume;
    }

    setVolume(value) {
        this.volume = value;
    }

    getStatus() {
        return this.status;
    }

    setStatus(value) {
        this.status = value;
    }

    changeChanel() {
        tivi.channel = remote.changeChanel;
    }

    changeVolume() {
        tivi.volume = remote.changeVolume;
    }
}