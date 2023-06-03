export interface IProduct {
    _id: number | string;
    name: string | null | undefined;
    list_price: number | null | undefined;
    original_price: number | null | undefined;
    images: IProductImage[];
    description: string;
    publishing_company:string | null | undefined;
    publication_date:string | null | undefined;
    size:string | null | undefined;
    cover_type:string | null | undefined;
    num_of_pages:string | null | undefined;
}
export interface IGetProduct {
    message: string;
    product: IProduct;
  }
export interface IProductImage {
    base_url: string;
    is_gallery: boolean;
    label: string | null;
    large_url: string;
    medium_url: string;
    position: number | null;
    small_url: string;
    thumbnail_url: string;
}