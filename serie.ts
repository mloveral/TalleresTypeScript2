export class Serie {
    constructor(public id: number, public name: string,
        public channel: string, public seasons: number,
        public genre: string, public link: string, public img: string
    ) {

    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getChannel(): string {
        return this.channel;
    }

    getSeasons(): number {
        return this.seasons;
    }

    getGenre(): string {
        return this.genre;
    }

    getLink(): string {
        return this.link;
    }
    
    getImg(): string {
        return this.img;
    }
}