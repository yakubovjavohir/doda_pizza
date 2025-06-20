import { RpcException } from "@nestjs/microservices";

export class NotFoundProduct extends RpcException {
    constructor() {
        super("not found!-$-404");
    }
}

export class NameExist extends RpcException {
    constructor() {
        super("name exist!-$-400");
    }
}
