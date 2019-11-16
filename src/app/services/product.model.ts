export class Product {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        // public imageUrl: string,
        public price: number,
        public brand: string
    ) { }
}
export class Car {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        // public imageUrl: string,
        public price: number,
        public year: number,
        public brand: string,
        public fuel: string,
        public km: number,
        public cat: string
    ) { }
}

export class Mobile {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        // public imageUrl: string,
        public price: number,
        public brand: string,
    ) { }
}

export class Elec {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        // public imageUrl: string,
        public price: number,
        public type: string,
    ) { }
}

export class Job {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        // public imageUrl: string,
    ) { }
}

export class Fashion {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        // public imageUrl: string,
        public price: number,
        public gender: string,
    ) { }
}

export class Service {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        // public imageUrl: string,
    ) { }
}
