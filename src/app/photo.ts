export class Photo {
    imgSrc: string;

    constructor(o?: IPhoto) {
        this.imgSrc = typeof o?.img_src === 'string' ? o.img_src : '';
    }
}

export interface IPhoto {
    img_src: string;
}