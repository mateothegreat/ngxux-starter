export class RequestResult<T> {

    public static readonly RESULT_ERROR: string = 'error';

    public static isError(resultObj: any): boolean {

        return resultObj.result == this.RESULT_ERROR;

    }

    public result: string;
    public message: string;
    public data: T;

}
