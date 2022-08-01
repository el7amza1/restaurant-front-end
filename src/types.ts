export interface hamada {
    fahad: fahad[];
}
export interface item  {
    id: number;
    itemName: string;
    ingredients: string[];
    price: number;
    orderQty: number;
    category: string;
    popular: boolean;
    imgUrl: string;
}

export interface fahad {
    item : item[]
}