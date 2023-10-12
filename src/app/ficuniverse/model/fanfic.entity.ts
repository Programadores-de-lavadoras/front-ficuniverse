export class Fanfic {
    id: number;
    title: string;
    author: string;
    summary: string;
    publication_date: string;
    language_id: number;
    status_id: number;
    saga_id: number;
    constructor(){
        this.id = 0;
        this.title = '';
        this.author = '';
        this.summary = '';
        this.publication_date = '';
        this.language_id = 0;
        this.status_id = 0;
        this.saga_id = 0;
    }
}

