import { RpcException } from "@nestjs/microservices";

export class NotFoundToken extends RpcException {
    constructor() {
        super("TeLEGRAM_BOT_TOKEN is not defined in the environment variables!-$-404");
    }
}
