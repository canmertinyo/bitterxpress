import { ResponseHeadersMetadataKey } from '../enums/response-headers.enum';
import { Headers } from '../interfaces/headers.interface';

export function ResponseHeaders(headers: Headers): ClassDecorator & MethodDecorator {
  return function (target: any, key?: string | symbol) {
    if (key) Reflect.defineMetadata(ResponseHeadersMetadataKey.HEADERS, headers, target, key);
    else Reflect.defineMetadata(ResponseHeadersMetadataKey.HEADERS, headers, target);
  };
}