/**
 * MENU DATA — easy to edit.
 *
 * Dish names are taken from the restaurant's printed à-la-carte menu.
 * Prices and descriptions are intentionally left empty (`price: null`,
 * no `description`) because they were not confirmed. Fill them in here and
 * the menu page updates automatically.
 *
 * Each item supports: name, description?, price?, image?, popular?
 */

export type MenuItem = {
  name: string;
  description?: string;
  /** e.g. "Rs 1,200". Leave null to show a placeholder. */
  price?: string | null;
  /** Optional imported image URL. */
  image?: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  /** Optional short note shown under the category title. */
  note?: string;
  items: MenuItem[];
};

const i = (name: string, popular = false): MenuItem => ({
  name,
  price: null,
  popular,
});

export const menu: MenuCategory[] = [
  {
    id: "soups",
    title: "Soups & Hotpot",
    note: "The kitchen is best known for its soups and steamboat hotpot.",
    items: [
      i("Yuan Tung Special Hot & Sour Soup", true),
      i("Thai Soup", true),
      i("Hot Pot (Steamboat Soup)", true),
      i("Chicken Corn Soup"),
      i("Wonton Soup"),
      i("Chicken Vegetable Soup"),
      i("Chicken Asparagus Soup"),
      i("Crab Asparagus Soup"),
      i("Egg Tomato Soup"),
      i("Fish Vegetable Soup"),
      i("Beef Pickle Vegetable Soup"),
      i("Garlic Chilli / Lemon Sauce Soup"),
      i("Chicken Vegetable Tou-Fu Soup"),
    ],
  },
  {
    id: "starters",
    title: "Starters & Appetizers",
    items: [
      i("Fried Prawn Balls", true),
      i("Sau Mai (Steamed Dumplings)", true),
      i("Steam Fried Gyoza (Dumplings)"),
      i("Prawn on Toast"),
      i("Fish on Toast"),
      i("Fried Spring Rolls"),
      i("Special Prawn Roll in Bread Crumbs"),
      i("Prawn & Vegetables in Egg Roll"),
      i("Fried Stuffed Chillies"),
      i("Stuffed Bean Curd (Tou-fu)"),
      i("Fish / Prawn Cracker"),
    ],
  },
  {
    id: "specialities",
    title: "Yuan Tung's Specialities",
    items: [
      i("Yuan Tung Fish Whole Spicy"),
      i("Yuan Tung Szechuan Fish"),
      i("Yuan Tung Hot & Spicy Prawn"),
      i("Yuan Tung Hot & Spicy Chicken"),
      i("Yuan Tung Spicy Won Ton"),
      i("Yuan Tung Egg Foo-yoong"),
      i("Yuan Tung Sweet & Sour Prawn"),
      i("Mongolian Beef"),
      i("Crispy Beef"),
      i("Chicken with Black Bean Sauce"),
      i("Prawn with Garlic Sauce"),
      i("Prawn with Garlic & Chillies Dry"),
      i("Chicken with Cauliflower Spicy"),
      i("Green Beans with Pickle & Mince Meat"),
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    items: [
      i("Chicken Manchurian", true),
      i("Chicken Chilli Dry", true),
      i("Chicken Chillies with Gravy"),
      i("Chicken Chillies with Vegetables"),
      i("Chicken with Lime"),
      i("Fried Chicken Drumstick"),
      i("Kung Pao Chicken (Spicy)"),
      i("Fried Chicken with Chinese Gravy"),
      i("Chicken Vegetable Egg Roll"),
      i("Chicken with Pineapple"),
      i("Sweet & Sour Chicken"),
      i("Chicken with Soya Sauce"),
      i("Chicken with Almonds & Vegetables"),
      i("Chicken with Walnut & Vegetables"),
      i("Chicken Mahroom Mint Stick & Vegetables"),
      i("Chicken with Bean Sprout"),
      i("Chicken with Tou-fu & Vegetables"),
      i("Chicken with Lily Flower"),
    ],
  },
  {
    id: "beef",
    title: "Beef",
    items: [
      i("Beef with Chinese Pickle"),
      i("Fried Beef with Chillies"),
      i("Beef Chillies with Vegetables"),
      i("Beef with Vegetables"),
      i("Sweet & Sour Beef"),
      i("Beef with Beansprout"),
      i("Hot Sauce Beef with Vegetables"),
      i("Beef Tomato with Vegetables"),
      i("Beef with Bean Curd (Ma-Bo-Tou-Fu)"),
      i("Sizzling Beef"),
    ],
  },
  {
    id: "fish",
    title: "Fish",
    items: [
      i("Szechuan Fish", true),
      i("Sticky Fish", true),
      i("Fish with Chillies & Vegetables"),
      i("Fish with Vegetables"),
      i("Fried Fish with Chinese Sauce Spicy"),
      i("Fish & Chips"),
      i("Steam Fish Fillet Roll in Ginger & Silk Bean"),
      i("Sweet & Sour Fish"),
      i("French Fries"),
    ],
  },
  {
    id: "prawns",
    title: "Prawns & Seafood",
    items: [
      i("BBQ Squid", true),
      i("Sizzling Prawn"),
      i("Prawn with Bean Curd (Tou-fu)"),
      i("Hot Sauce Prawn with Vegetables"),
      i("Prawn with Chillies & Vegetables"),
      i("Prawn with Vegetables"),
      i("Sweet & Sour Prawn"),
      i("Prawn with Bean Sprout"),
      i("Prawn with Almond & Vegetables"),
      i("Prawn with Walnut & Vegetables"),
      i("Jumbo Prawn in Shell with Sauce"),
      i("Butterfly Fried Prawn with Tail"),
      i("Crab with Garlic & Ginger"),
      i("Fried Squid"),
      i("Young Corn with Prawn & Vegetables"),
    ],
  },
  {
    id: "noodles",
    title: "Noodles & Chow Mein",
    items: [
      i("Chicken Chow Mein", true),
      i("Prawn Chow Mein"),
      i("Chicken & Prawn Chow Mein"),
      i("Beef Chow Mein"),
      i("Crab Chow Mein"),
      i("Crispy Chow Mein"),
      i("Chopsuey Chow Mein"),
      i("Beef Tomato Chow Mein"),
      i("Vegetables Chow Mein"),
      i("Thai Chow Mein"),
      i("Chicken Noodle Soup"),
      i("Prawn Noodle Soup"),
      i("Chopsuey Noodle Soup"),
      i("Won Ton Noodle Soup"),
      i("Rice Noodles with Chicken & Vegetables"),
      i("Chinese Chopsuey with Crispy Noodles"),
    ],
  },
  {
    id: "rice",
    title: "Rice",
    items: [
      i("Egg Fried Rice", true),
      i("Chicken Fried Rice"),
      i("Prawn Fried Rice"),
      i("Crab Fried Rice"),
      i("Chicken & Prawn Fried Rice"),
      i("Chicken Masala Fried Rice"),
      i("Vegetable Fried Rice"),
      i("Garlic Fried Rice"),
      i("Beef Chilli Fried Rice"),
      i("Plain Steam Rice"),
      i("Steam Rice with Chicken & Mushroom"),
      i("Steam Rice with Beef Tomato"),
      i("Soft Rice Porridge with Chicken"),
    ],
  },
  {
    id: "eggs",
    title: "Eggs (Omelets)",
    items: [
      i("Egg Foo Yoong"),
      i("Chicken Foo Yoong"),
      i("Prawn Foo Yoong"),
      i("Crab Foo Yoong"),
      i("Chicken Shrimp Mushroom Foo Yoong"),
      i("Sharksfin with Whipped Eggs"),
    ],
  },
  {
    id: "vegetables",
    title: "Vegetables & Tofu",
    note: "Vegetarian selections — please confirm current availability by phone.",
    items: [
      i("Vegetable Chopsuey with Crispy Noodles"),
      i("Vegetables Chow Mein"),
      i("Vegetable Fried Rice"),
      i("Chicken-free Bean Curd (Tou-fu) with Vegetables"),
      i("Green Beans with Pickle"),
      i("Bean Sprout with Vegetables"),
    ],
  },
  {
    id: "sizzlers",
    title: "Sizzlers",
    items: [
      i("Sizzling Beef"),
      i("Sizzling Prawn"),
      i("Sizzling Chicken"),
      i("Munchurian Prawn"),
      i("Manchurian Chicken"),
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [i("Chilled Pineapple in Syrup"), i("Ice Cream / Kulfi"), i("Ras Malai")],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      i("Canned Drinks"),
      i("Bottled Soft Drinks"),
      i("Fresh Orange Juice (seasonal)"),
      i("Fresh Lime Soft Drinks"),
      i("Cold Tea with Lemon"),
      i("Chinese Green Tea (per person)"),
      i("Tea / Coffee — Black or with Milk"),
      i("Bottled Water 1.5 Ltr"),
      i("Bottled Water 500 ml"),
    ],
  },
];
