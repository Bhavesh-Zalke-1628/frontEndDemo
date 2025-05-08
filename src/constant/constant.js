const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Products",
        subItems: [
            { name: "Product 1", href: "/products/1" },
            { name: "Product 2", href: "/products/2" },
            { name: "Product 3", href: "/products/3" },
        ],
    },
    {
        name: "Calculator",
        subItems: [
            { name: "Basic Calculator", href: "/calculator/basic" },
            { name: "Scientific", href: "/calculator/scientific" },
            { name: "Financial", href: "/calculator/financial" },
        ],
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export {
    menuItems
}