import PrismaClient from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.Category.createMany({
        Categories:[
            {
                category: "Electronics"
            },
            {
                category: "Clothing"
            },
            {
                category: "Home & Kitchen"
            },
            {
                category: "Health & Wellness"
            },
        ]
    })

    await prisma.Product.createMany({
        products: [
            {
                cat_name: '',
                prod_name: 'Product 1',
                prod_img: '',
                price: 19.99,
                rate: '',
                description: 'Description for Product 1',
                state: 'Out Of Stock',
            },
            {
                cat_name: '',
                prod_name: 'Product 2',
                prod_img: '',
                price: 19.99,
                rate: '',
                description: 'Description for Product 2',
                state: 'Available',
            },
        ],
    });
}