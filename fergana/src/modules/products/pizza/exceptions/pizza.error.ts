import { RpcException } from "@nestjs/microservices";

export class NotFoundPizza extends RpcException {
    constructor() {
        super("pizza not found!-$-404");
    }
}

export class NameExist extends RpcException {
    constructor() {
        super("name exist!-$-400");
    }
}
