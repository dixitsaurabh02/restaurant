const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});

const Product = mongoose.model('product', productSchema);

// Sample products data
const sampleProducts = [
  {
    name: "Margherita Pizza",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3",
    price: "299",
    description: "Classic pizza with tomato sauce, mozzarella, and basil"
  },
  {
    name: "Chicken Burger",
    category: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3",
    price: "199",
    description: "Juicy chicken patty with fresh vegetables and special sauce"
  },
  {
    name: "Pasta Carbonara",
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3",
    price: "249",
    description: "Creamy pasta with bacon, eggs, and parmesan cheese"
  },
  {
    name: "Chocolate Cake",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3",
    price: "179",
    description: "Rich and moist chocolate cake with chocolate ganache"
  },
  {
    name: "Iced Coffee",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3",
    price: "129",
    description: "Chilled coffee with milk and ice"
  },
  {
    name: "Family Pizza Combo",
    category: "HotDeals",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3",
    price: "499",
    description: "2 Large Pizzas + 2 Garlic Bread + 2 Cold Drinks"
  },
  {
    name: "Weekend Special Burger",
    category: "HotDeals",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3",
    price: "299",
    description: "2 Burgers + Fries + 2 Cold Drinks"
  },
  {
    name: "Pasta Party Pack",
    category: "HotDeals",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3",
    price: "399",
    description: "2 Pasta + Garlic Bread + Salad"
  },
  {
    name: "Pepperoni Pizza",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3",
    price: "329",
    description: "Classic pepperoni pizza with extra cheese and Italian herbs"
  },
  {
    name: "Veggie Supreme Pizza",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3",
    price: "279",
    description: "Loaded with fresh vegetables, olives, and mushrooms"
  },
  {
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3",
    price: "349",
    description: "Grilled chicken with BBQ sauce and red onions"
  },
  {
    name: "Cheese Burger",
    category: "Burger",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3",
    price: "169",
    description: "Classic beef patty with melted cheese and fresh veggies"
  },
  {
    name: "Veggie Burger",
    category: "Burger",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3",
    price: "149",
    description: "Plant-based patty with lettuce, tomato, and special sauce"
  },
  {
    name: "Penne Arrabbiata",
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3",
    price: "229",
    description: "Spicy tomato sauce with garlic and red chilies"
  },
  {
    name: "Alfredo Pasta",
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3",
    price: "259",
    description: "Creamy white sauce pasta with mushrooms"
  },
  {
    name: "Tiramisu",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3",
    price: "199",
    description: "Classic Italian dessert with coffee and mascarpone"
  },
  {
    name: "Apple Pie",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-4.0.3",
    price: "159",
    description: "Warm apple pie with vanilla ice cream"
  },
  {
    name: "Mango Smoothie",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3",
    price: "149",
    description: "Fresh mango blended with yogurt and honey"
  },
  {
    name: "Cappuccino",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3",
    price: "139",
    description: "Espresso with steamed milk and foam"
  },
  {
    name: "Family Feast",
    category: "HotDeals",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3",
    price: "699",
    description: "2 Pizzas + 2 Burgers + 2 Pastas + 4 Drinks"
  },
  {
    name: "Grilled Salmon",
    category: "MainCourse",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3",
    price: "449",
    description: "Fresh salmon fillet with herbs, served with roasted vegetables"
  },
  {
    name: "Butter Chicken",
    category: "MainCourse",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3",
    price: "379",
    description: "Creamy tomato-based curry with tender chicken and naan bread"
  },
  {
    name: "Vegetable Lasagna",
    category: "MainCourse",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3",
    price: "329",
    description: "Layered pasta with fresh vegetables, tomato sauce, and cheese"
  },
  {
    name: "Greek Salad",
    category: "Salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3",
    price: "219",
    description: "Fresh cucumber, tomatoes, olives, and feta cheese with olive oil dressing"
  },
  {
    name: "Caesar Salad",
    category: "Salad",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3",
    price: "249",
    description: "Crisp romaine lettuce, croutons, parmesan cheese with caesar dressing"
  },
  {
    name: "Quinoa Buddha Bowl",
    category: "Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3",
    price: "279",
    description: "Quinoa, roasted vegetables, chickpeas, and tahini dressing"
  },
  {
    name: "Chicken Cobb Salad",
    category: "Salad",
    image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-4.0.3",
    price: "289",
    description: "Grilled chicken, bacon, avocado, eggs, and blue cheese with ranch dressing"
  },
  {
    name: "Blue Lagoon",
    category: "Mocktails",
    image: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?ixlib=rb-4.0.3",
    price: "189",
    description: "Blue curacao syrup, sprite, and fresh lemon juice"
  },
  {
    name: "Fruit Punch",
    category: "Mocktails",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3",
    price: "199",
    description: "Mixed fruit juice, sprite, and grenadine syrup"
  },
  {
    name: "Passion Fruit Cooler",
    category: "Mocktails",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3",
    price: "169",
    description: "Fresh passion fruit, mint, lime juice with sprite"
  },
  {
    name: "Masala Chai",
    category: "IndianBeverage",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3",
    price: "89",
    description: "Traditional Indian spiced tea with milk"
  },
  {
    name: "Lassi",
    category: "IndianBeverage",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3",
    price: "119",
    description: "Sweet yogurt-based drink with cardamom"
  },
  {
    name: "Fresh Lime Soda",
    category: "IndianBeverage",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3",
    price: "99",
    description: "Sweet and salt mixed lime soda - Indian street style"
  },
  // Kanak's Special Items
  {
    name: "Aloo Bhujia",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3",
    price: "89",
    description: "Crispy potato noodles seasoned with Indian spices"
  },
  {
    name: "Soan Papdi",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
    price: "299",
    description: "Flaky sweet made with gram flour, sugar, and cardamom"
  },
  {
    name: "Raj Kachori",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
    price: "159",
    description: "Large crispy puri filled with spicy and tangy mixtures"
  },
  {
    name: "Bhel Puri",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
    price: "129",
    description: "Puffed rice with tangy tamarind sauce and vegetables"
  },
  {
    name: "Dahi Puri",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
    price: "139",
    description: "Crispy puris filled with potato, yogurt and chutneys"
  },
  {
    name: "Thali Special",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3",
    price: "299",
    description: "Complete meal with dal, sabzi, rice, roti, and dessert"
  },
  {
    name: "Paneer Butter Masala",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3",
    price: "249",
    description: "Cottage cheese in rich tomato gravy with butter"
  },
  {
    name: "Masala Dosa",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixlib=rb-4.0.3",
    price: "169",
    description: "Crispy rice crepe with spiced potato filling"
  },
  {
    name: "Idli Sambar",
    category: "KanakSpecial",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3",
    price: "129",
    description: "Steamed rice cakes with lentil soup and chutney"
  },
  {
    name: "Tomato Ketchup",
    category: "Extras",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3",
    price: "1",
    description: "Fresh and tangy tomato ketchup sachet"
  },
  {
    name: "Chili Flakes",
    category: "Extras",
    image: "https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?ixlib=rb-4.0.3",
    price: "1",
    description: "Spicy red chili flakes to add heat to your dish"
  },
  
];

// Function to seed products
async function seedProducts() {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(sampleProducts);
    console.log('Successfully seeded products');

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding products:', error);
    mongoose.connection.close();
  }
}

// Run the seeding function
seedProducts(); 