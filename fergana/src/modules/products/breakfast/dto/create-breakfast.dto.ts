export class CreateBreakfastDto {
    name: string;
    description?: string;
    price?: number;
    imageUrl: string;
    fixedprice?: number;
    disavailabletoppings?: string[];
    vegetarian?: boolean;
} 