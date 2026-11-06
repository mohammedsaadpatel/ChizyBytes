/* ============================================================
   CHIZY BYTES — MAIN SCRIPT
   ============================================================ */

// ==================== MENU DATA ====================
const menuItems = [
    // ---- BURGERS (NON-VEG) ----
    {
        id: 1, name: "Classic Chicken Burger", category: "burger", diet: "nonveg",
        emoji: "🍔", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop",
        price: 129, desc: "Juicy chicken patty, fresh lettuce, tangy mayo & melted cheese.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 40 },
            { name: "Monster", extra: 80 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Crispy Bacon", price: 40, emoji: "🥓" },
            { name: "Extra Patty", price: 50, emoji: "🍖" },
            { name: "Fried Egg", price: 25, emoji: "🍳" },
            { name: "Mushrooms", price: 25, emoji: "🍄" },
            { name: "Caramelized Onions", price: 20, emoji: "🧅" },
            { name: "BBQ Sauce", price: 15, emoji: "🫙" }
        ],
        removables: ["Lettuce", "Tomato", "Onion", "Mayo", "Pickles"]
    },
    {
        id: 2, name: "Spicy Zinger Burger", category: "burger", diet: "nonveg",
        emoji: "🔥", image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=500&h=350&fit=crop",
        price: 159, desc: "Fiery crunchy chicken with spicy sauce, jalapeños & pepper jack cheese.",
        badges: ["spicy"], spicy: true,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 40 },
            { name: "Monster", extra: 80 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Extra Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Crispy Bacon", price: 40, emoji: "🥓" },
            { name: "Extra Patty", price: 50, emoji: "🍖" },
            { name: "Ghost Pepper Sauce", price: 25, emoji: "👻" },
            { name: "Mushrooms", price: 25, emoji: "🍄" }
        ],
        removables: ["Lettuce", "Tomato", "Onion", "Spicy Sauce", "Pickles"]
    },
    {
        id: 3, name: "Double Smash Burger", category: "burger", diet: "nonveg",
        emoji: "🍔", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=350&fit=crop",
        price: 199, desc: "Two smashed chicken patties, double cheese, smoky sauce & onion rings.",
        badges: ["new"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 50 },
            { name: "Monster", extra: 100 }
        ],
        toppings: [
            { name: "Triple Cheese", price: 40, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Crispy Bacon", price: 40, emoji: "🥓" },
            { name: "Extra Patty", price: 50, emoji: "🍖" },
            { name: "Fried Egg", price: 25, emoji: "🍳" },
            { name: "Truffle Mayo", price: 35, emoji: "✨" }
        ],
        removables: ["Lettuce", "Tomato", "Onion", "Smoky Sauce", "Onion Rings"]
    },
    {
        id: 4, name: "BBQ Chicken Burger", category: "burger", diet: "nonveg",
        emoji: "🍔", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=350&fit=crop",
        price: 179, desc: "Grilled chicken, smoky BBQ glaze, crispy onion rings & coleslaw.",
        badges: [], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 40 },
            { name: "Monster", extra: 80 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Crispy Bacon", price: 40, emoji: "🥓" },
            { name: "Extra Patty", price: 50, emoji: "🍖" },
            { name: "Pineapple Ring", price: 20, emoji: "🍍" },
            { name: "Extra BBQ Sauce", price: 15, emoji: "🫙" }
        ],
        removables: ["Lettuce", "Tomato", "Onion", "BBQ Sauce", "Coleslaw"]
    },

    // ---- BURGERS (VEG) ----
    {
        id: 5, name: "Aloo Tikki Burger", category: "burger", diet: "veg",
        emoji: "🍔", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&h=350&fit=crop",
        price: 89, desc: "Crispy aloo tikki with mint chutney, onions & fresh veggies.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 30 },
            { name: "Monster", extra: 60 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Tikki", price: 35, emoji: "🥔" },
            { name: "Mushrooms", price: 25, emoji: "🍄" },
            { name: "Corn", price: 20, emoji: "🌽" },
            { name: "Mint Mayo", price: 15, emoji: "🌿" }
        ],
        removables: ["Lettuce", "Tomato", "Onion", "Mint Chutney", "Pickles"]
    },
    {
        id: 6, name: "Paneer Royale Burger", category: "burger", diet: "veg",
        emoji: "🍔", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=350&fit=crop",
        price: 129, desc: "Grilled paneer patty, tandoori mayo, crunchy lettuce & cheese slice.",
        badges: ["new"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 40 },
            { name: "Monster", extra: 80 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Paneer", price: 40, emoji: "🧈" },
            { name: "Mushrooms", price: 25, emoji: "🍄" },
            { name: "Capsicum", price: 20, emoji: "🫑" },
            { name: "Tandoori Sauce", price: 15, emoji: "🫙" }
        ],
        removables: ["Lettuce", "Tomato", "Onion", "Tandoori Mayo"]
    },
    {
        id: 7, name: "Veg Crunch Burger", category: "burger", diet: "veg",
        emoji: "🍔", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&h=350&fit=crop",
        price: 99, desc: "Crunchy veggie patty with garden-fresh salad & creamy mayo.",
        badges: [], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 30 },
            { name: "Monster", extra: 60 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Corn", price: 20, emoji: "🌽" },
            { name: "Olives", price: 20, emoji: "🫒" },
            { name: "Extra Sauce", price: 15, emoji: "🫙" }
        ],
        removables: ["Lettuce", "Tomato", "Onion", "Mayo"]
    },
    {
        id: 8, name: "Mushroom Swiss Burger", category: "burger", diet: "veg",
        emoji: "🍄", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=350&fit=crop",
        price: 139, desc: "Sautéed mushrooms, Swiss cheese, truffle aioli on a brioche bun.",
        badges: [], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 40 },
            { name: "Monster", extra: 80 }
        ],
        toppings: [
            { name: "Extra Swiss Cheese", price: 35, emoji: "🧀" },
            { name: "Extra Mushrooms", price: 30, emoji: "🍄" },
            { name: "Truffle Oil", price: 40, emoji: "✨" },
            { name: "Caramelized Onions", price: 20, emoji: "🧅" },
            { name: "Spinach", price: 15, emoji: "🥬" }
        ],
        removables: ["Mushrooms", "Swiss Cheese", "Truffle Aioli", "Onion"]
    },

    // ---- PIZZA (NON-VEG) ----
    {
        id: 9, name: "Chicken Tikka Pizza", category: "pizza", diet: "nonveg",
        emoji: "🍕", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop",
        price: 249, desc: "Tandoori chicken tikka, onions, capsicum & spicy tikka sauce.",
        badges: ["best"], spicy: true,
        sizes: [
            { name: "Medium (8\")", extra: 0 },
            { name: "Large (10\")", extra: 80 },
            { name: "XL (12\")", extra: 150 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 40, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Chicken", price: 60, emoji: "🍗" },
            { name: "Olives", price: 25, emoji: "🫒" },
            { name: "Corn", price: 20, emoji: "🌽" },
            { name: "Mushrooms", price: 25, emoji: "🍄" },
            { name: "Onions", price: 15, emoji: "🧅" },
            { name: "Capsicum", price: 20, emoji: "🫑" },
            { name: "Stuffed Crust", price: 50, emoji: "🧀" }
        ],
        removables: ["Onions", "Capsicum", "Tikka Sauce"]
    },
    {
        id: 10, name: "Pepperoni Feast Pizza", category: "pizza", diet: "nonveg",
        emoji: "🍕", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=350&fit=crop",
        price: 279, desc: "Loaded with spicy pepperoni, mozzarella & classic marinara.",
        badges: [], spicy: false,
        sizes: [
            { name: "Medium (8\")", extra: 0 },
            { name: "Large (10\")", extra: 80 },
            { name: "XL (12\")", extra: 150 }
        ],
        toppings: [
            { name: "Extra Mozzarella", price: 40, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Pepperoni", price: 50, emoji: "🥓" },
            { name: "Olives", price: 25, emoji: "🫒" },
            { name: "Mushrooms", price: 25, emoji: "🍄" },
            { name: "Stuffed Crust", price: 50, emoji: "🧀" }
        ],
        removables: ["Pepperoni", "Marinara Sauce", "Oregano"]
    },
    {
        id: 11, name: "BBQ Chicken Pizza", category: "pizza", diet: "nonveg",
        emoji: "🍕", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=350&fit=crop",
        price: 269, desc: "Smoky BBQ chicken, red onions, corn & mozzarella cheese.",
        badges: ["new"], spicy: false,
        sizes: [
            { name: "Medium (8\")", extra: 0 },
            { name: "Large (10\")", extra: 80 },
            { name: "XL (12\")", extra: 150 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 40, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Chicken", price: 60, emoji: "🍗" },
            { name: "Corn", price: 20, emoji: "🌽" },
            { name: "Pineapple", price: 20, emoji: "🍍" },
            { name: "Stuffed Crust", price: 50, emoji: "🧀" }
        ],
        removables: ["Onions", "Corn", "BBQ Sauce"]
    },
    {
        id: 12, name: "Keema Supreme Pizza", category: "pizza", diet: "nonveg",
        emoji: "🍕", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=350&fit=crop",
        price: 259, desc: "Spiced chicken keema, green chillies, onion & mint drizzle.",
        badges: ["spicy"], spicy: true,
        sizes: [
            { name: "Medium (8\")", extra: 0 },
            { name: "Large (10\")", extra: 80 },
            { name: "XL (12\")", extra: 150 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 40, emoji: "🧀" },
            { name: "Green Chillies", price: 15, emoji: "🌶️" },
            { name: "Extra Keema", price: 55, emoji: "🍖" },
            { name: "Onions", price: 15, emoji: "🧅" },
            { name: "Capsicum", price: 20, emoji: "🫑" },
            { name: "Stuffed Crust", price: 50, emoji: "🧀" }
        ],
        removables: ["Green Chillies", "Onions", "Mint Drizzle"]
    },

    // ---- PIZZA (VEG) ----
    {
        id: 13, name: "Margherita Pizza", category: "pizza", diet: "veg",
        emoji: "🍕", image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&h=350&fit=crop",
        price: 179, desc: "Classic mozzarella, fresh basil & San Marzano tomato sauce.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Medium (8\")", extra: 0 },
            { name: "Large (10\")", extra: 70 },
            { name: "XL (12\")", extra: 130 }
        ],
        toppings: [
            { name: "Extra Mozzarella", price: 40, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Olives", price: 25, emoji: "🫒" },
            { name: "Fresh Basil", price: 15, emoji: "🌿" },
            { name: "Sun-dried Tomatoes", price: 25, emoji: "🍅" },
            { name: "Stuffed Crust", price: 50, emoji: "🧀" }
        ],
        removables: ["Basil", "Tomato Sauce"]
    },
    {
        id: 14, name: "Paneer Tikka Pizza", category: "pizza", diet: "veg",
        emoji: "🍕", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&h=350&fit=crop",
        price: 229, desc: "Marinated paneer tikka, onions, capsicum & creamy tikka sauce.",
        badges: [], spicy: true,
        sizes: [
            { name: "Medium (8\")", extra: 0 },
            { name: "Large (10\")", extra: 80 },
            { name: "XL (12\")", extra: 150 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 40, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Paneer", price: 45, emoji: "🧈" },
            { name: "Mushrooms", price: 25, emoji: "🍄" },
            { name: "Corn", price: 20, emoji: "🌽" },
            { name: "Stuffed Crust", price: 50, emoji: "🧀" }
        ],
        removables: ["Onions", "Capsicum", "Tikka Sauce"]
    },
    {
        id: 15, name: "Farmhouse Pizza", category: "pizza", diet: "veg",
        emoji: "🍕", image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=500&h=350&fit=crop",
        price: 209, desc: "Mushrooms, capsicum, onions, tomatoes & black olives on cheesy base.",
        badges: [], spicy: false,
        sizes: [
            { name: "Medium (8\")", extra: 0 },
            { name: "Large (10\")", extra: 70 },
            { name: "XL (12\")", extra: 130 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 40, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Corn", price: 20, emoji: "🌽" },
            { name: "Baby Corn", price: 25, emoji: "🌽" },
            { name: "Paneer", price: 35, emoji: "🧈" },
            { name: "Stuffed Crust", price: 50, emoji: "🧀" }
        ],
        removables: ["Mushrooms", "Capsicum", "Onions", "Tomatoes", "Olives"]
    },
    {
        id: 16, name: "Veg Supreme Pizza", category: "pizza", diet: "veg",
        emoji: "🍕", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&h=350&fit=crop",
        price: 239, desc: "Loaded with every veggie — mushrooms, corn, capsicum, olives, paneer & more!",
        badges: ["new"], spicy: false,
        sizes: [
            { name: "Medium (8\")", extra: 0 },
            { name: "Large (10\")", extra: 80 },
            { name: "XL (12\")", extra: 150 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 40, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Paneer", price: 45, emoji: "🧈" },
            { name: "Pineapple", price: 20, emoji: "🍍" },
            { name: "Stuffed Crust", price: 50, emoji: "🧀" }
        ],
        removables: ["Mushrooms", "Corn", "Capsicum", "Olives", "Paneer", "Onions"]
    },

    // ---- SHAWARMA (NON-VEG) ----
    {
        id: 17, name: "Classic Chicken Shawarma", category: "shawarma", diet: "nonveg",
        emoji: "🌯", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Handmade_Chicken_Shawarma_Wrap_-_Lavash.jpg",
        price: 129, desc: "Tender shredded chicken, garlic sauce, pickled veggies in warm pita.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 40 },
            { name: "Jumbo", extra: 70 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Chicken", price: 50, emoji: "🍗" },
            { name: "French Fries Inside", price: 30, emoji: "🍟" },
            { name: "Hummus", price: 25, emoji: "🫘" },
            { name: "Extra Garlic Sauce", price: 15, emoji: "🧄" }
        ],
        removables: ["Pickled Veggies", "Garlic Sauce", "Onions", "Lettuce"]
    },
    {
        id: 18, name: "Spicy Chicken Shawarma", category: "shawarma", diet: "nonveg",
        emoji: "🌯", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&h=350&fit=crop",
        price: 149, desc: "Fiery spiced chicken with hot sauce, jalapeños & crispy onions.",
        badges: ["spicy"], spicy: true,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 40 },
            { name: "Jumbo", extra: 70 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Extra Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Chicken", price: 50, emoji: "🍗" },
            { name: "French Fries Inside", price: 30, emoji: "🍟" },
            { name: "Schezwan Sauce", price: 20, emoji: "🫙" },
            { name: "Chilli Flakes", price: 10, emoji: "🌶️" }
        ],
        removables: ["Jalapeños", "Hot Sauce", "Onions", "Lettuce"]
    },
    {
        id: 19, name: "Double Chicken Shawarma", category: "shawarma", diet: "nonveg",
        emoji: "🌯", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=350&fit=crop",
        price: 179, desc: "Double the chicken, double the garlic sauce, maximum satisfaction.",
        badges: ["new"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 50 },
            { name: "Jumbo", extra: 90 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "French Fries Inside", price: 30, emoji: "🍟" },
            { name: "Hummus", price: 25, emoji: "🫘" },
            { name: "Coleslaw", price: 20, emoji: "🥗" }
        ],
        removables: ["Garlic Sauce", "Onions", "Pickled Veggies"]
    },

    // ---- SHAWARMA (VEG) ----
    {
        id: 20, name: "Paneer Shawarma", category: "shawarma", diet: "veg",
        emoji: "🌯", image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&h=350&fit=crop",
        price: 119, desc: "Grilled paneer strips, tangy sauce, fresh veggies in warm roti.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 35 },
            { name: "Jumbo", extra: 60 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Extra Paneer", price: 40, emoji: "🧈" },
            { name: "French Fries Inside", price: 30, emoji: "🍟" },
            { name: "Hummus", price: 25, emoji: "🫘" },
            { name: "Mint Chutney", price: 15, emoji: "🌿" }
        ],
        removables: ["Onions", "Tomato", "Lettuce", "Tangy Sauce"]
    },
    {
        id: 21, name: "Falafel Shawarma", category: "shawarma", diet: "veg",
        emoji: "🌯", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Falafel_wrap_at_Down_The_Rabbit_Hole_2018.jpg",
        price: 129, desc: "Crispy falafel balls, tahini sauce, pickled turnip & fresh herbs.",
        badges: ["new"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 35 },
            { name: "Jumbo", extra: 60 }
        ],
        toppings: [
            { name: "Extra Falafel", price: 35, emoji: "🧆" },
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Hummus", price: 25, emoji: "🫘" },
            { name: "French Fries Inside", price: 30, emoji: "🍟" },
            { name: "Spicy Sauce", price: 15, emoji: "🌶️" }
        ],
        removables: ["Tahini Sauce", "Pickled Turnip", "Onions"]
    },
    {
        id: 22, name: "Veg Loaded Shawarma", category: "shawarma", diet: "veg",
        emoji: "🌯", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&h=350&fit=crop",
        price: 99, desc: "Mixed grilled veggies, creamy garlic mayo, fresh salad in a wrap.",
        badges: [], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 30 },
            { name: "Jumbo", extra: 55 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Corn", price: 20, emoji: "🌽" },
            { name: "Mushrooms", price: 25, emoji: "🍄" },
            { name: "Hummus", price: 25, emoji: "🫘" }
        ],
        removables: ["Garlic Mayo", "Onions", "Tomato"]
    },

    // ---- FRIES & SIDES ----
    {
        id: 23, name: "Classic Salted Fries", category: "fries", diet: "veg",
        emoji: "🍟", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500&h=350&fit=crop",
        price: 79, desc: "Golden crispy fries with a perfect pinch of rock salt.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 30 },
            { name: "Family", extra: 60 }
        ],
        toppings: [
            { name: "Cheese Sauce", price: 30, emoji: "🧀" },
            { name: "Peri Peri Seasoning", price: 15, emoji: "🌶️" },
            { name: "Truffle Oil", price: 35, emoji: "✨" },
            { name: "Sour Cream", price: 20, emoji: "🥛" },
            { name: "Ketchup Sachet", price: 5, emoji: "🫙" }
        ],
        removables: ["Salt"]
    },
    {
        id: 24, name: "Peri Peri Fries", category: "fries", diet: "veg",
        emoji: "🍟", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=350&fit=crop",
        price: 99, desc: "Seasoned with fiery peri peri spice mix & served with mayo dip.",
        badges: ["spicy"], spicy: true,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 30 },
            { name: "Family", extra: 60 }
        ],
        toppings: [
            { name: "Cheese Sauce", price: 30, emoji: "🧀" },
            { name: "Extra Peri Peri", price: 10, emoji: "🌶️" },
            { name: "Sour Cream", price: 20, emoji: "🥛" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" }
        ],
        removables: ["Peri Peri Seasoning"]
    },
    {
        id: 25, name: "Cheese Loaded Fries", category: "fries", diet: "veg",
        emoji: "🍟", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=350&fit=crop",
        price: 139, desc: "Crispy fries drenched in gooey cheese sauce, jalapeños & herbs.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 40 },
            { name: "Family", extra: 70 }
        ],
        toppings: [
            { name: "Extra Cheese", price: 30, emoji: "🧀" },
            { name: "Jalapeños", price: 20, emoji: "🌶️" },
            { name: "Crispy Onions", price: 20, emoji: "🧅" },
            { name: "Bacon Bits", price: 40, emoji: "🥓" },
            { name: "Sour Cream", price: 20, emoji: "🥛" }
        ],
        removables: ["Cheese Sauce", "Jalapeños", "Herbs"]
    },
    {
        id: 26, name: "Onion Rings", category: "fries", diet: "veg",
        emoji: "🧅", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&h=350&fit=crop",
        price: 89, desc: "Crispy battered onion rings served with chipotle dip.",
        badges: [], spicy: false,
        sizes: [
            { name: "6 Pcs", extra: 0 },
            { name: "9 Pcs", extra: 30 },
            { name: "12 Pcs", extra: 55 }
        ],
        toppings: [
            { name: "Cheese Sauce", price: 30, emoji: "🧀" },
            { name: "Peri Peri Dust", price: 15, emoji: "🌶️" },
            { name: "BBQ Dip", price: 15, emoji: "🫙" }
        ],
        removables: ["Chipotle Dip"]
    },
    {
        id: 27, name: "Chicken Nuggets", category: "fries", diet: "nonveg",
        emoji: "🍗", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=350&fit=crop",
        price: 119, desc: "6 crispy golden chicken nuggets with honey mustard dip.",
        badges: [], spicy: false,
        sizes: [
            { name: "6 Pcs", extra: 0 },
            { name: "9 Pcs", extra: 40 },
            { name: "12 Pcs", extra: 70 }
        ],
        toppings: [
            { name: "Cheese Sauce", price: 30, emoji: "🧀" },
            { name: "BBQ Sauce", price: 15, emoji: "🫙" },
            { name: "Spicy Sauce", price: 15, emoji: "🌶️" }
        ],
        removables: ["Honey Mustard Dip"]
    },
    {
        id: 28, name: "Paneer Popcorn", category: "fries", diet: "veg",
        emoji: "🧀", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=350&fit=crop",
        price: 109, desc: "Bite-sized crispy paneer bites tossed in spicy seasoning.",
        badges: ["new"], spicy: true,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 35 }
        ],
        toppings: [
            { name: "Cheese Dip", price: 25, emoji: "🧀" },
            { name: "Mint Dip", price: 15, emoji: "🌿" },
            { name: "Extra Seasoning", price: 10, emoji: "🌶️" }
        ],
        removables: ["Seasoning"]
    },

    // ---- DRINKS ----
    {
        id: 29, name: "Cold Coffee", category: "drinks", diet: "veg",
        emoji: "☕", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=350&fit=crop",
        price: 99, desc: "Creamy blended cold coffee with whipped cream & chocolate drizzle.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 30 }
        ],
        toppings: [
            { name: "Extra Whipped Cream", price: 20, emoji: "🍦" },
            { name: "Chocolate Syrup", price: 15, emoji: "🍫" },
            { name: "Caramel Syrup", price: 15, emoji: "🍮" },
            { name: "Ice Cream Scoop", price: 30, emoji: "🍨" }
        ],
        removables: ["Whipped Cream", "Chocolate Drizzle", "Sugar"]
    },
    {
        id: 30, name: "Virgin Mojito", category: "drinks", diet: "veg",
        emoji: "🍹", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=350&fit=crop",
        price: 79, desc: "Refreshing lime, mint & soda with crushed ice. Pure chill vibes.",
        badges: [], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 25 }
        ],
        toppings: [
            { name: "Blue Curaçao", price: 20, emoji: "💙" },
            { name: "Extra Mint", price: 10, emoji: "🌿" },
            { name: "Watermelon Flavor", price: 15, emoji: "🍉" }
        ],
        removables: ["Mint", "Sugar"]
    },
    {
        id: 31, name: "Chocolate Shake", category: "drinks", diet: "veg",
        emoji: "🥤", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=350&fit=crop",
        price: 119, desc: "Thick & creamy chocolate milkshake with choco chips on top.",
        badges: [], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 30 }
        ],
        toppings: [
            { name: "Oreo Crumble", price: 25, emoji: "🍪" },
            { name: "Whipped Cream", price: 20, emoji: "🍦" },
            { name: "Extra Choco Chips", price: 15, emoji: "🍫" },
            { name: "Ice Cream Scoop", price: 30, emoji: "🍨" }
        ],
        removables: ["Choco Chips", "Sugar"]
    },
    {
        id: 32, name: "Masala Lemonade", category: "drinks", diet: "veg",
        emoji: "🍋", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&h=350&fit=crop",
        price: 59, desc: "Tangy lemon with a desi twist — black salt, cumin & a hint of spice.",
        badges: [], spicy: false,
        sizes: [
            { name: "Regular", extra: 0 },
            { name: "Large", extra: 20 }
        ],
        toppings: [
            { name: "Mint Leaves", price: 10, emoji: "🌿" },
            { name: "Ginger", price: 10, emoji: "🫚" }
        ],
        removables: ["Black Salt", "Cumin", "Sugar"]
    },
    {
        id: 33, name: "Soft Drink (Can)", category: "drinks", diet: "veg",
        emoji: "🥫", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=350&fit=crop",
        price: 49, desc: "Chilled 330ml can of your favourite fizzy refreshment.",
        badges: [], spicy: false,
        sizes: [
            { name: "330ml Can", extra: 0 },
            { name: "500ml Bottle", extra: 20 }
        ],
        toppings: [],
        removables: []
    },

    // ---- DESSERTS ----
    {
        id: 34, name: "Chocolate Brownie", category: "desserts", diet: "veg",
        emoji: "🍫", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=350&fit=crop",
        price: 89, desc: "Warm gooey chocolate brownie with a crispy top & fudgy center.",
        badges: ["best"], spicy: false,
        sizes: [
            { name: "Single", extra: 0 },
            { name: "Double", extra: 50 }
        ],
        toppings: [
            { name: "Vanilla Ice Cream", price: 40, emoji: "🍨" },
            { name: "Hot Chocolate Sauce", price: 20, emoji: "🍫" },
            { name: "Whipped Cream", price: 20, emoji: "🍦" },
            { name: "Nuts & Sprinkles", price: 15, emoji: "🥜" }
        ],
        removables: []
    },
    {
        id: 35, name: "Chocolate Lava Cake", category: "desserts", diet: "veg",
        emoji: "🍰", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=350&fit=crop",
        price: 139, desc: "Molten chocolate cake that oozes warm chocolate lava inside!",
        badges: ["new"], spicy: false,
        sizes: [
            { name: "Single", extra: 0 },
            { name: "With Ice Cream", extra: 40 }
        ],
        toppings: [
            { name: "Vanilla Ice Cream", price: 40, emoji: "🍨" },
            { name: "Berry Compote", price: 30, emoji: "🍓" },
            { name: "Whipped Cream", price: 20, emoji: "🍦" }
        ],
        removables: []
    },
    {
        id: 36, name: "Ice Cream Sundae", category: "desserts", diet: "veg",
        emoji: "🍨", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=350&fit=crop",
        price: 109, desc: "Three scoops of ice cream with chocolate sauce, nuts & cherry on top.",
        badges: [], spicy: false,
        sizes: [
            { name: "Regular (3 Scoops)", extra: 0 },
            { name: "Large (5 Scoops)", extra: 60 }
        ],
        toppings: [
            { name: "Extra Sauce", price: 15, emoji: "🍫" },
            { name: "Oreo Crumble", price: 25, emoji: "🍪" },
            { name: "Sprinkles", price: 10, emoji: "🌈" },
            { name: "Wafer Stick", price: 10, emoji: "🧇" }
        ],
        removables: ["Nuts", "Cherry"]
    },
    {
        id: 37, name: "Gulab Jamun (4 Pcs)", category: "desserts", diet: "veg",
        emoji: "🟤", image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Gulab_Jamun.jpg",
        price: 69, desc: "Soft, spongy gulab jamuns soaked in warm cardamom sugar syrup.",
        badges: [], spicy: false,
        sizes: [
            { name: "4 Pcs", extra: 0 },
            { name: "6 Pcs", extra: 25 }
        ],
        toppings: [
            { name: "Vanilla Ice Cream", price: 40, emoji: "🍨" },
            { name: "Rabri", price: 30, emoji: "🥛" }
        ],
        removables: []
    }
];

// ---- COMBO DATA ----
const combos = [
    {
        id: "c1", name: "Burger Mania Combo", emoji: "🍔🍟🥤",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=350&fit=crop",
        desc: "Any burger + regular fries + soft drink. The ultimate trio!",
        items: ["Any Burger", "Regular Fries", "Soft Drink"],
        price: 199, oldPrice: 257, badge: "SAVE ₹58"
    },
    {
        id: "c2", name: "Pizza Party Combo", emoji: "🍕🍟🥤",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=350&fit=crop",
        desc: "Medium pizza + peri peri fries + cold coffee. Party in a box!",
        items: ["Medium Pizza", "Peri Peri Fries", "Cold Coffee"],
        price: 329, oldPrice: 427, badge: "SAVE ₹98"
    },
    {
        id: "c3", name: "Shawarma Special", emoji: "🌯🍟🥤",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Plate_shawarma.jpg",
        desc: "Large shawarma + cheese fries + virgin mojito. Street food heaven!",
        items: ["Large Shawarma", "Cheese Fries", "Virgin Mojito"],
        price: 279, oldPrice: 367, badge: "SAVE ₹88"
    },
    {
        id: "c4", name: "Dessert Date Combo", emoji: "🍰🍫☕",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=350&fit=crop",
        desc: "Lava cake + brownie + cold coffee. Sweet endings guaranteed!",
        items: ["Lava Cake", "Brownie", "Cold Coffee"],
        price: 259, oldPrice: 327, badge: "SAVE ₹68"
    },
    {
        id: "c5", name: "Veg Supreme Combo 🌿", emoji: "🍔🍕🍟🥤",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&h=350&fit=crop",
        desc: "Paneer burger + medium paneer pizza + fries + mojito. Veg heaven!",
        items: ["Paneer Burger", "Paneer Pizza (M)", "Fries", "Mojito"],
        price: 399, oldPrice: 516, badge: "SAVE ₹117"
    },
    {
        id: "c6", name: "Family Feast", emoji: "🍔🍔🍕🍟🍟🥤🥤",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=350&fit=crop",
        desc: "2 burgers + 1 large pizza + 2 fries + 2 drinks. Feed the whole family!",
        items: ["2 Burgers", "Large Pizza", "2 Fries", "2 Drinks"],
        price: 649, oldPrice: 835, badge: "SAVE ₹186"
    }
];


// ==================== STATE ====================
let cart = [];
let currentItem = null;
let modalState = { sizeIndex: 0, toppings: [], removables: [], qty: 1 };
let activeCategory = 'all';
let activeDiet = 'all';
let searchQuery = '';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    renderVegZone();
    renderCombos();
    initPreloader();
    initNavbar();
    initScrollAnimations();
    initStatCounters();
    initExplodedBurger();
});

// ==================== PRELOADER ====================
function initPreloader() {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2200);
}

// ==================== NAVBAR ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
}

function toggleMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');
    toggle.classList.toggle('active');
    links.classList.toggle('open');
}

// ==================== STAT COUNTERS ====================
function initStatCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-num');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) observer.observe(statsSection);
}

function animateCounter(el, target) {
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 40);
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .veg-highlight-card, .combo-card, .about-content, .about-visual').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ==================== RENDER MENU ====================
function renderMenu() {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    const filtered = menuItems.filter(item => {
        const catMatch = activeCategory === 'all' || item.category === activeCategory;
        const dietMatch = activeDiet === 'all' || item.diet === activeDiet;
        const searchMatch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return catMatch && dietMatch && searchMatch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 0;">
            <span style="font-size: 3rem; display: block; margin-bottom: 12px;">🔍</span>
            <p style="font-size: 1.1rem; color: var(--text-muted);">No items found. Try a different search or category!</p>
        </div>`;
        return;
    }

    filtered.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.style.animationDelay = `${i * 0.05}s`;
        card.innerHTML = createCardHTML(item);
        grid.appendChild(card);
    });
}

function createCardHTML(item) {
    let badgesHTML = `<span class="badge badge-${item.diet === 'veg' ? 'veg' : 'nonveg'}">${item.diet === 'veg' ? '🌿 Veg' : '🍗 Non-Veg'}</span>`;
    item.badges.forEach(b => {
        const labels = { best: '⭐ Bestseller', new: '✨ New', spicy: '🔥 Spicy' };
        badgesHTML += `<span class="badge badge-${b}">${labels[b]}</span>`;
    });

    const visualContent = item.image
        ? `<img class="card-image" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\\'card-emoji\\'>${item.emoji}</span>';">`
        : `<span class="card-emoji">${item.emoji}</span>`;

    return `
        <div class="card-visual">
            <div class="card-badges">${badgesHTML}</div>
            ${visualContent}
        </div>
        <div class="card-body">
            <h3 class="card-name">${item.name}</h3>
            <p class="card-desc">${item.desc}</p>
            <div class="card-footer">
                <span class="card-price">₹${item.price}</span>
                <div class="card-actions">
                    <button class="card-btn card-btn-customize" title="Customize" onclick="openCustomize(${item.id})">
                        <i class="fas fa-sliders-h"></i>
                    </button>
                    <button class="card-btn card-btn-add" title="Quick Add" onclick="quickAdd(${item.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==================== RENDER VEG ZONE ====================
function renderVegZone() {
    const grid = document.getElementById('vegGrid');
    grid.innerHTML = '';
    const vegItems = menuItems.filter(i => i.diet === 'veg');
    vegItems.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.style.animationDelay = `${i * 0.05}s`;
        card.innerHTML = createCardHTML(item);
        grid.appendChild(card);
    });
}

// ==================== RENDER COMBOS ====================
function renderCombos() {
    const grid = document.getElementById('combosGrid');
    grid.innerHTML = '';
    combos.forEach((combo, i) => {
        const card = document.createElement('div');
        card.className = 'combo-card reveal';
        card.style.animationDelay = `${i * 0.1}s`;
        const visualHTML = combo.image
            ? `<div class="combo-visual">
                   <img src="${combo.image}" alt="${combo.name}" class="combo-img" loading="lazy" onerror="this.onerror=null; this.parentElement.style.display='none';">
                   <span class="combo-badge">${combo.badge}</span>
               </div>`
            : `<span class="combo-badge">${combo.badge}</span><div class="combo-emojis">${combo.emoji}</div>`;

        card.innerHTML = `
            ${visualHTML}
            <div class="combo-body">
                <h3 class="combo-name">${combo.name}</h3>
                <p class="combo-desc">${combo.desc}</p>
                <div class="combo-items">
                    ${combo.items.map(it => `<span class="combo-item-tag">${it}</span>`).join('')}
                </div>
                <div class="combo-footer">
                    <span class="combo-price">₹${combo.price} <span class="combo-old">₹${combo.oldPrice}</span></span>
                    <button class="combo-add" onclick="addComboToCart('${combo.id}')">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==================== FILTERING ====================
function filterCategory(cat, btn) {
    activeCategory = cat;
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderMenu();
}

function filterDiet(diet, btn) {
    activeDiet = diet;
    document.querySelectorAll('.diet-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu();
}

function searchItems(query) {
    searchQuery = query;
    renderMenu();
}

// ==================== QUICK ADD TO CART ====================
function quickAdd(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;
    const cartItem = {
        itemId: item.id,
        name: item.name,
        emoji: item.emoji,
        image: item.image,
        diet: item.diet,
        size: item.sizes[0].name,
        basePrice: item.price,
        toppings: [],
        removables: [],
        instructions: '',
        qty: 1,
        totalPrice: item.price
    };
    addToCart(cartItem);
    showToast(`${item.emoji} ${item.name} added to cart!`);
}

// ==================== CUSTOMIZATION MODAL ====================
function openCustomize(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;
    currentItem = item;
    modalState = { sizeIndex: 0, toppings: [], removables: [], qty: 1 };

    // Set header
    const iconContainer = document.getElementById('modalFoodIcon');
    if (item.image) {
        iconContainer.innerHTML = `<img src="${item.image}" alt="${item.name}" class="modal-food-img" onerror="this.onerror=null; this.parentElement.textContent='${item.emoji}';">`;
    } else {
        iconContainer.textContent = item.emoji;
    }
    document.getElementById('modalFoodName').textContent = item.name;
    const badge = document.getElementById('modalFoodBadge');
    badge.textContent = item.diet === 'veg' ? '🌿 Veg' : '🍗 Non-Veg';
    badge.className = `modal-food-badge ${item.diet === 'veg' ? 'veg-badge' : 'nonveg-badge'}`;
    document.getElementById('modalBasePrice').textContent = `₹${item.price}`;
    document.getElementById('modalQty').textContent = '1';

    // Sizes
    const sizeContainer = document.getElementById('sizeOptions');
    sizeContainer.innerHTML = item.sizes.map((s, i) => `
        <div class="size-option ${i === 0 ? 'selected' : ''}" onclick="selectSize(${i})">
            <span class="size-name">${s.name}</span>
            <span class="size-price">${s.extra === 0 ? 'Base' : `+₹${s.extra}`}</span>
        </div>
    `).join('');

    // Toppings
    const toppingContainer = document.getElementById('toppingsGrid');
    if (item.toppings.length === 0) {
        toppingContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; grid-column: 1/-1;">No extra toppings available for this item.</p>';
    } else {
        toppingContainer.innerHTML = item.toppings.map((t, i) => `
            <div class="topping-item" onclick="toggleTopping(${i})">
                <div class="topping-check"><i class="fas fa-check"></i></div>
                <span style="font-size: 1.2rem;">${t.emoji}</span>
                <div class="topping-info">
                    <span class="topping-label">${t.name}</span>
                    <span class="topping-price">+₹${t.price}</span>
                </div>
            </div>
        `).join('');
    }

    // Removables
    const removableContainer = document.getElementById('removablesGrid');
    if (item.removables.length === 0) {
        removableContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; grid-column: 1/-1;">Nothing to remove for this item.</p>';
    } else {
        removableContainer.innerHTML = item.removables.map((r, i) => `
            <div class="removable-item" onclick="toggleRemovable(${i})">
                <div class="removable-check"><i class="fas fa-times"></i></div>
                <span class="removable-label">No ${r}</span>
            </div>
        `).join('');
    }

    // Reset instructions
    document.getElementById('specialInstructions').value = '';

    updateModalPrice();
    document.getElementById('customizeModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('customizeModal').classList.remove('open');
    document.body.style.overflow = '';
    currentItem = null;
}

function selectSize(index) {
    modalState.sizeIndex = index;
    document.querySelectorAll('#sizeOptions .size-option').forEach((el, i) => {
        el.classList.toggle('selected', i === index);
    });
    updateModalPrice();
}

function toggleTopping(index) {
    const toppings = document.querySelectorAll('#toppingsGrid .topping-item');
    const isSelected = modalState.toppings.includes(index);
    if (isSelected) {
        modalState.toppings = modalState.toppings.filter(t => t !== index);
        toppings[index].classList.remove('selected');
    } else {
        modalState.toppings.push(index);
        toppings[index].classList.add('selected');
    }
    updateModalPrice();
}

function toggleRemovable(index) {
    const removables = document.querySelectorAll('#removablesGrid .removable-item');
    const isSelected = modalState.removables.includes(index);
    if (isSelected) {
        modalState.removables = modalState.removables.filter(r => r !== index);
        removables[index].classList.remove('selected');
    } else {
        modalState.removables.push(index);
        removables[index].classList.add('selected');
    }
}

function changeModalQty(delta) {
    modalState.qty = Math.max(1, Math.min(10, modalState.qty + delta));
    document.getElementById('modalQty').textContent = modalState.qty;
    updateModalPrice();
}

function updateModalPrice() {
    if (!currentItem) return;
    let price = currentItem.price;
    price += currentItem.sizes[modalState.sizeIndex].extra;
    modalState.toppings.forEach(i => { price += currentItem.toppings[i].price; });
    const total = price * modalState.qty;
    document.getElementById('modalTotalPrice').textContent = `₹${total}`;
}

function addCustomizedToCart() {
    if (!currentItem) return;
    let unitPrice = currentItem.price + currentItem.sizes[modalState.sizeIndex].extra;
    const selectedToppings = modalState.toppings.map(i => {
        unitPrice += currentItem.toppings[i].price;
        return currentItem.toppings[i].name;
    });
    const selectedRemovables = modalState.removables.map(i => currentItem.removables[i]);
    const instructions = document.getElementById('specialInstructions').value.trim();

    const cartItem = {
        itemId: currentItem.id,
        name: currentItem.name,
        emoji: currentItem.emoji,
        image: currentItem.image,
        diet: currentItem.diet,
        size: currentItem.sizes[modalState.sizeIndex].name,
        basePrice: currentItem.price,
        toppings: selectedToppings,
        removables: selectedRemovables,
        instructions: instructions,
        qty: modalState.qty,
        totalPrice: unitPrice * modalState.qty
    };

    addToCart(cartItem);
    showToast(`${currentItem.emoji} ${currentItem.name} (${cartItem.size}) added to cart!`);
    closeModal();
}

// ==================== CART ====================
function addToCart(cartItem) {
    // Check if same item with same customization exists
    const existing = cart.find(c =>
        c.itemId === cartItem.itemId &&
        c.size === cartItem.size &&
        JSON.stringify(c.toppings) === JSON.stringify(cartItem.toppings) &&
        JSON.stringify(c.removables) === JSON.stringify(cartItem.removables)
    );

    if (existing) {
        existing.qty += cartItem.qty;
        existing.totalPrice = (existing.totalPrice / (existing.qty - cartItem.qty)) * existing.qty;
    } else {
        cartItem.cartId = Date.now() + Math.random();
        cart.push(cartItem);
    }

    updateCartUI();
}

function removeFromCart(cartId) {
    cart = cart.filter(c => c.cartId !== cartId);
    updateCartUI();
}

function changeCartQty(cartId, delta) {
    const item = cart.find(c => c.cartId === cartId);
    if (!item) return;
    const unitPrice = item.totalPrice / item.qty;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(cartId);
        return;
    }
    item.totalPrice = unitPrice * item.qty;
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
    showToast('🗑️ Cart cleared!');
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const countEl = document.getElementById('cartCount');
    countEl.textContent = count;
    countEl.classList.remove('bump');
    void countEl.offsetWidth; // trigger reflow
    countEl.classList.add('bump');

    const container = document.getElementById('cartItems');
    const emptyEl = document.getElementById('cartEmpty');
    const footerEl = document.getElementById('cartFooter');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">🛒</span>
                <p>Your cart is empty</p>
                <span>Add something delicious!</span>
            </div>
        `;
        footerEl.style.display = 'none';
        return;
    }

    footerEl.style.display = 'block';
    container.innerHTML = cart.map(item => {
        let customText = [];
        if (item.size) customText.push(item.size);
        if (item.toppings.length) customText.push(`+${item.toppings.join(', +')}`);
        if (item.removables.length) customText.push(`No ${item.removables.join(', No ')}`);
        if (item.instructions) customText.push(`"${item.instructions}"`);
        const dietDot = item.diet === 'veg' ? '🟢' : '🔴';

        const visualHTML = item.image
            ? `<img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\\'cart-item-emoji\\'>${item.emoji}</span>';">`
            : `<span class="cart-item-emoji">${item.emoji}</span>`;

        return `
            <div class="cart-item">
                ${visualHTML}
                <div class="cart-item-info">
                    <div class="cart-item-name">${dietDot} ${item.name}</div>
                    <div class="cart-item-custom">${customText.join(' • ')}</div>
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">₹${item.totalPrice}</span>
                        <div class="cart-qty-control">
                            <button class="cart-qty-btn" onclick="changeCartQty(${item.cartId}, -1)"><i class="fas fa-minus"></i></button>
                            <span class="cart-qty">${item.qty}</span>
                            <button class="cart-qty-btn" onclick="changeCartQty(${item.cartId}, 1)"><i class="fas fa-plus"></i></button>
                            <button class="cart-remove" onclick="removeFromCart(${item.cartId})"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const gst = Math.round(subtotal * 0.05);
    const delivery = subtotal >= 500 ? 0 : 30;
    const total = subtotal + gst + delivery;

    document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
    document.getElementById('cartGST').textContent = `₹${gst}`;
    document.getElementById('cartDelivery').textContent = delivery === 0 ? 'FREE 🎉' : `₹${delivery}`;
    document.getElementById('cartTotal').textContent = `₹${total}`;
}

function toggleCart() {
    document.getElementById('cartOverlay').classList.toggle('open');
    document.getElementById('cartSidebar').classList.toggle('open');
}

function addComboToCart(comboId) {
    const combo = combos.find(c => c.id === comboId);
    if (!combo) return;
    const cartItem = {
        cartId: Date.now() + Math.random(),
        itemId: comboId,
        name: combo.name,
        emoji: combo.emoji.split('').filter(c => c.charCodeAt(0) > 255)[0] || '🍽️',
        image: combo.image,
        diet: combo.name.includes('Veg') ? 'veg' : 'nonveg',
        size: 'Combo',
        basePrice: combo.price,
        toppings: [],
        removables: [],
        instructions: '',
        qty: 1,
        totalPrice: combo.price
    };
    cart.push(cartItem);
    updateCartUI();
    showToast(`🎉 ${combo.name} added to cart!`);
}

// ==================== CHECKOUT ====================
function checkout() {
    if (cart.length === 0) return;
    const orderId = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('orderId').textContent = orderId;
    document.getElementById('successModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleCart();
    cart = [];
    updateCartUI();
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('open');
    document.body.style.overflow = '';
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">✅</span> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ==================== CLOSE MODALS ON OVERLAY CLICK / ESCAPE ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.getElementById('customizeModal').classList.contains('open')) closeModal();
        if (document.getElementById('successModal').classList.contains('open')) closeSuccessModal();
        if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
    }
});

document.getElementById('customizeModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('customizeModal')) closeModal();
});
document.getElementById('successModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('successModal')) closeSuccessModal();
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('mobileToggle').classList.remove('active');
    });
});

// ==================== 3D EXPLODED BURGER SCROLL SYSTEM ====================
let explodeTarget = 0;
let explodeCurrent = 0;
let isManualExplode = false;
let isAutoDemo = false;
let mouseTiltX = 0;
let mouseTiltY = 0;
let currentTiltX = 0;
let currentTiltY = 0;
let demoStartTime = null;

function initExplodedBurger() {
    const stack = document.getElementById('burgerStack');
    const stage = document.getElementById('burger3dStage');
    const btnText = document.getElementById('explodeBtnText');
    const btn = document.getElementById('explodeToggleBtn');
    if (!stack) return;

    // Scroll listener for exploded view:
    // Scroll progress: 
    //   0px -> 320px: Explodes & rotates in 3D (0 -> 1)
    //   320px -> 640px: Rotates back & reassembles into original setup (1 -> 0)
    //   > 640px: Stays assembled at 0
    window.addEventListener('scroll', () => {
        if (isAutoDemo) return;
        const scrollY = window.scrollY;

        // Reset manual button lock once user scrolls significantly
        if (isManualExplode && Math.abs(scrollY - (window.lastManualScroll || 0)) > 60) {
            isManualExplode = false;
            if (btn) btn.classList.remove('active');
        }

        if (!isManualExplode) {
            if (scrollY <= 0) {
                explodeTarget = 0;
            } else if (scrollY <= 320) {
                explodeTarget = scrollY / 320;
            } else if (scrollY <= 640) {
                explodeTarget = Math.max(0, 1 - (scrollY - 320) / 320);
            } else {
                explodeTarget = 0;
            }
        }
    }, { passive: true });

    // Interactive 3D Cursor Tilt Parallax
    if (stage) {
        stage.addEventListener('mousemove', (e) => {
            const rect = stage.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            mouseTiltY = x * 26;  // rotateY: -13deg to +13deg
            mouseTiltX = -y * 22; // rotateX: -11deg to +11deg
        });

        stage.addEventListener('mouseleave', () => {
            mouseTiltX = 0;
            mouseTiltY = 0;
        });

        // Touch support for mobile devices
        stage.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                const rect = stage.getBoundingClientRect();
                const touch = e.touches[0];
                const x = (touch.clientX - rect.left) / rect.width - 0.5;
                const y = (touch.clientY - rect.top) / rect.height - 0.5;
                mouseTiltY = x * 20;
                mouseTiltX = -y * 16;
            }
        }, { passive: true });

        stage.addEventListener('touchend', () => {
            mouseTiltX = 0;
            mouseTiltY = 0;
        });
    }

    // High performance RAF Animation Loop
    function renderExplodedBurger(timestamp) {
        if (isAutoDemo) {
            if (!demoStartTime) demoStartTime = timestamp;
            const elapsed = (timestamp - demoStartTime) / 1000;
            // Smooth sinusoidal cycle between 0 (assembled) and 1 (exploded)
            explodeTarget = (Math.sin(elapsed * 1.6 - Math.PI / 2) + 1) / 2;
        }

        // LERP for buttery smooth transitions
        explodeCurrent += (explodeTarget - explodeCurrent) * 0.12;

        // LERP for mouse tilt
        currentTiltX += (mouseTiltX - currentTiltX) * 0.1;
        currentTiltY += (mouseTiltY - currentTiltY) * 0.1;

        // Apply dynamic CSS variable for layers
        stack.style.setProperty('--explode-p', explodeCurrent.toFixed(4));

        // Apply stage tilt with depth
        const baseRotateX = 4 + currentTiltX;
        const baseRotateY = currentTiltY;
        stack.style.transform = `rotateX(${baseRotateX.toFixed(2)}deg) rotateY(${baseRotateY.toFixed(2)}deg)`;

        // Toggle floating breathing when fully assembled
        if (explodeCurrent < 0.05 && !isAutoDemo && window.scrollY < 60) {
            stack.classList.add('assembled', 'floating');
            stack.classList.remove('exploded');
        } else {
            stack.classList.remove('floating');
            if (explodeCurrent > 0.85) {
                stack.classList.add('exploded');
                stack.classList.remove('assembled');
            } else {
                stack.classList.remove('exploded');
            }
        }

        // Update button text indicator
        if (btnText && btn) {
            if (explodeCurrent > 0.5) {
                btnText.textContent = "🍔 Assemble Burger";
                btn.classList.add('active');
            } else {
                btnText.textContent = "💥 Explode View";
                if (!isManualExplode) btn.classList.remove('active');
            }
        }

        requestAnimationFrame(renderExplodedBurger);
    }

    requestAnimationFrame(renderExplodedBurger);
}

function toggleExplodeMode() {
    isAutoDemo = false;
    const demoBtn = document.getElementById('explodeDemoBtn');
    if (demoBtn) {
        demoBtn.classList.remove('active');
        const icon = document.getElementById('demoIcon');
        const text = document.getElementById('demoText');
        if (icon) icon.className = 'fas fa-play';
        if (text) text.textContent = 'Auto Demo';
    }

    isManualExplode = true;
    window.lastManualScroll = window.scrollY;

    if (explodeTarget > 0.5) {
        explodeTarget = 0;
    } else {
        explodeTarget = 1;
    }
}

function toggleAutoDemo() {
    isAutoDemo = !isAutoDemo;
    demoStartTime = null;
    const demoBtn = document.getElementById('explodeDemoBtn');
    const demoIcon = document.getElementById('demoIcon');
    const demoText = document.getElementById('demoText');

    if (isAutoDemo) {
        isManualExplode = false;
        if (demoBtn) demoBtn.classList.add('active');
        if (demoIcon) demoIcon.className = 'fas fa-pause';
        if (demoText) demoText.textContent = 'Pause Demo';
        showToast('🎬 Auto Demo: Watch all burger components split, rotate & assemble back!');
    } else {
        if (demoBtn) demoBtn.classList.remove('active');
        if (demoIcon) demoIcon.className = 'fas fa-play';
        if (demoText) demoText.textContent = 'Auto Demo';
        explodeTarget = window.scrollY === 0 ? 0 : explodeTarget;
    }
}
