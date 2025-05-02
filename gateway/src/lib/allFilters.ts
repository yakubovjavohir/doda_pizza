import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ResData } from '../lib/resdata';

@Catch()
export class CatchEverythingFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: HttpException | Error, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();

        let httpStatus =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        let message: string | string[] = exception.message || 'Internal server error';

        if (exception instanceof HttpException) {
            const response: any = exception.getResponse();
            if (typeof response === 'object' && response !== null && 'message' in response) {
              message = response.message;
            }
          }
          

        if (typeof message === 'string') {
            message = message.replace(/^\d+\sUNKNOWN:\s/, '');
            const parts = message.split('-$-');
            if (parts.length === 2) {
                const parsedStatus = parseInt(parts[1], 10);
                if (!isNaN(parsedStatus)) {
                    httpStatus = parsedStatus;
                }
                message = parts[0];
            }
        }

        const resData = new ResData<null>(httpStatus, String(message));
        httpAdapter.reply(ctx.getResponse(), resData, resData.meta.statusCode);
    }
}

