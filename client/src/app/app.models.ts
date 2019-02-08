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

export class  Transaction {
    constructor(
        public ID?: number,
        public CUSTOMER_ID?: number,
        public SERVICE_ID?: number,
        public amount?: number,
        public price_total?: string
  )  {}

}
