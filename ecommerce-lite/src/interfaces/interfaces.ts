export type UserRole = "admin" | "user";

// Interface Address
export interface Address {
    street: string;
    city: string;
    zip: string;
    country: string;
}

// Interface Dimensions
export interface Dimensions {
    width: number;
    height: number;
    depth?: number; // depth opcional
}

// Interface Product
export interface Product {
    sku: number;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    isActive: boolean;
    category: string;
    imageUrl: string;
    createdAt: Date;

    // Optional
    tags?: string[];
    dimensions?: Dimensions;
    description?: string;
}

// Interface User
export interface User {
    id: number;
    fullName: string;
    email: string;
    isActive: boolean;
    role: UserRole;
    address: Address;
    createdAt: Date;

    // Optional
    tags?: string[];
    dimensions?: Dimensions;
    description?: string;
}