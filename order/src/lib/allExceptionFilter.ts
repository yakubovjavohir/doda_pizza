import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';

@Catch()
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception: RpcException | Error, host: ArgumentsHost) {
    if (exception instanceof RpcException) {
      return super.catch(exception, host);
    } else {
      if (Array.isArray(exception['response']?.['message'])) {
        const message = exception['response']?.['message'].join(',');

        exception = new RpcException(`${message}-$-400`);
      } else {
        exception = new RpcException(`${exception.message}-$-500`);
      }
    }    
    return super.catch(exception, host);
  }
}
