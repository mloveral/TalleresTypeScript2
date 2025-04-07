export class Serie {
    constructor(id, name, channel, seasons, genre, link, img) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.genre = genre;
        this.link = link;
        this.img = img;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getChannel() {
        return this.channel;
    }
    getSeasons() {
        return this.seasons;
    }
    getGenre() {
        return this.genre;
    }
    getLink() {
        return this.link;
    }
    getImg() {
        return this.img;
    }
}
