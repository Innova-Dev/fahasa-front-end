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
export interface IProduct {
    _id: number | string;
    name: string | null | undefined;
    list_price: number | null | undefined;
    original_price: number | null | undefined;
    images: IProductImage[] | null | undefined;
    description: string;
}
