export class Product {
    constructor(
        public idProduct: string,
        public category: string,
        public idProfile: string,
        public img: string,
        public name: string,
        public price: number,
        public quantity: number
    ){}
}