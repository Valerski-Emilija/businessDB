export class Customer {
   constructor(public ID?: number,
            public NAME?: string,
            public EMAIL?: string,
            public ADDRESS?: string,
            public TELEPHONE?: string

          ) {}
}

export class  Service {
    constructor(
        public ID?: number,
        public TYPE?: string,
        public DESCRIPTION?: string,
        public PRICE?: string
  )  {}

}
