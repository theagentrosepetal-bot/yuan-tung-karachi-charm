import hotSourSoup from "@/assets/dish-hot-sour-soup.jpg";
import manchurian from "@/assets/dish-manchurian.jpg";
import chowMein from "@/assets/dish-chow-mein.jpg";
import bbqSquid from "@/assets/dish-bbq-squid.jpg";
import prawnBalls from "@/assets/dish-prawn-balls.jpg";
import szechuanFish from "@/assets/dish-szechuan-fish.jpg";
import eggFriedRice from "@/assets/dish-egg-fried-rice.jpg";
import dumplings from "@/assets/dish-dumplings.jpg";
import hotpot from "@/assets/hotpot.jpg";

/**
 * Dishes most often mentioned by guests in public reviews.
 * Photography is illustrative and can be swapped for the restaurant's own
 * photos. Availability should be confirmed with the restaurant.
 */
export type Dish = {
  name: string;
  image: string;
  note: string;
};

export const popularDishes: Dish[] = [
  {
    name: "Yuan Tung Special Hot & Sour Soup",
    image: hotSourSoup,
    note: "The dish guests mention most often, across decades of visits.",
  },
  { name: "Thai Soup", image: hotpot, note: "A long-time favourite of returning families." },
  { name: "Chicken Manchurian", image: manchurian, note: "A classic of the Karachi-Chinese table." },
  { name: "Chicken Chilli", image: manchurian, note: "Ordered dry or with gravy." },
  { name: "Szechuan Fish", image: szechuanFish, note: "Frequently named alongside the BBQ squid." },
  { name: "BBQ Squid", image: bbqSquid, note: "A regular recommendation for seafood lovers." },
  { name: "Fried Prawn Balls", image: prawnBalls, note: "A much-repeated starter recommendation." },
  { name: "Sticky Fish", image: szechuanFish, note: "Remembered fondly by longtime guests." },
  { name: "Egg Fried Rice", image: eggFriedRice, note: "The usual companion to a gravy dish." },
  { name: "Chow Mein", image: chowMein, note: "Chicken, beef, prawn or vegetable." },
  { name: "Sau Mai (Dumplings)", image: dumplings, note: "Steamed and served with dipping sauce." },
];

export const featuredDishes = popularDishes.slice(0, 4);
