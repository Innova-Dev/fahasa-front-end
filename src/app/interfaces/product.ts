export interface IProduct {
    _id?: number | string;
    name: string | null | undefined;
    list_price: number | null | undefined;
    original_price: number | null | undefined;
    images?: string[];
    description: string;
    publishing_company?:string | null | undefined;
    publication_date?:string | null | undefined;
    size?:string | null | undefined;
    cover_type?:string | null | undefined;
    num_of_pages?:string | null | undefined;
    total?: number
}
export interface IGetProduct {
    message: string;
    product: IProduct;
  }

  export interface PurchaseHistory {
    _id: string;
      items?: PurchaseHistoryItem[];
      totalPayment?: number;
      address?: string;
      user?: {
        $oid: string;
      };
  }
  
  interface PurchaseHistoryItem  {
    name: string;
    list_price: number;
    original_price: number;
    images?: string[];
    description: string;
    total: number;
    _id: {
        $oid: string;
      };
  }
  
