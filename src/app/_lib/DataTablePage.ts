export class DataTablePage {

    public static readonly SORT_ASC: string = 'ASC';
    public static readonly SORT_DESC: string = 'DESC';

    public count?: number = 0;
    public pageSize?: number = 0;
    public limit?: number = 0;
    public offset?: number = 0;
    public sort?: string;
    public dir?: string = 'ASC';

    public constructor(obj: {

        count?: number,
        pageSize?: number,
        limit?: number,
        offset?: number,
        sort?: string,
        dir?: string

    }) {

        this.count = obj.count || 0;
        this.pageSize = obj.pageSize || 0;
        this.limit = obj.limit || 0;
        this.offset = obj.offset || 0;
        this.sort = obj.sort;
        this.dir = obj.dir;

    }

    public toParams(): string {

        const arr = [];

        arr.push(`page=${ this.offset }`);
        arr.push(`size=${ this.pageSize }`);
        arr.push(`limit=${ this.limit }`);
        arr.push(`offset=${ this.offset }`);

        if (this.sort) arr.push(`sort=${ this.sort },${ this.dir }`);

        return arr.join('&');

    }

}
