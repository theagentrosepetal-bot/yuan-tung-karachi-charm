// Single place to edit the restaurant's core details.
export const restaurant = {
  name: "Yuan Tung Restaurant",
  localName: "یوآن تنگ",
  tagline: "Classic Chinese Cuisine in Karachi",
  category: "Chinese Restaurant",
  address: "173 Tariq Rd, Block 2 P.E.C.H.S., Karachi, Pakistan",
  phoneDisplay: "+92 21 34542934",
  phoneHref: "tel:+922134542934",
  priceRange: "Rs 1,000–6,000 per person",
  services: ["Dine-in", "Takeout", "Delivery"],
  reservations: "Reservations accepted — recommended for dinner",
  atmosphere: ["Casual", "Cozy", "Quiet", "Family-friendly", "Nostalgic"],
  rating: 4.1,
  reviewCount: 1854,
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Yuan+Tung+Restaurant+173+Tariq+Rd+Block+2+PECHS+Karachi",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Yuan+Tung+Restaurant+173+Tariq+Rd+Block+2+PECHS+Karachi",
  // Opening hours were not confirmed — leave editable rather than inventing them.
  hoursNote: "Opening hours vary — please call to confirm before visiting.",
} as const;
