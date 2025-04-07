class Serie {
    constructor(private id: number, private name: string,
        private channel: string, private seasons: number,
        private genre: string, private link: string, private img: string
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