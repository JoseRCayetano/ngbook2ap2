export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

     voteUp():void {
        this.votes +=1;
        /**
         * Ponemos false, debido a que el evento click se propaga al padre haciendo que se recargue la página.
         * Poniendolo a false ya no es propagado.
         */
    }

    voteDown(): void {
        this.votes -=1;
    }
    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}