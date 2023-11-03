import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./HttpStatuscode";

export class APIError extends BaseError {
    constructor ( name: string, httpCode = HttpStatusCode.INTERNALL_SERVER, description = 'internal server error'){
        super(name, httpCode, description);
    }

}