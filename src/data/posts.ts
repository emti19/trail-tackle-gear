import { Post } from "@/components/blog/PostCard";
import { Product } from "@/components/affiliate/ProductBox";
import { ComparisonProduct } from "@/components/affiliate/ComparisonTable";

// Sample posts data
export const posts: Post[] = [
  {
    id: "1",
    slug: "best-camping-stoves-2024",
    title: "The 7 Best Camping Stoves for Backcountry Adventures in 2024",
    excerpt: "From ultralight backpacking stoves to heavy-duty camp stoves, we tested the top options to help you cook anywhere in the wilderness.",
    category: "Camping",
    categorySlug: "camping",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "fly-fishing-rods-beginners",
    title: "Best Fly Fishing Rods for Beginners: A Complete Guide",
    excerpt: "Starting your fly fishing journey? We break down the essential rods that won't break the bank but will last for years.",
    category: "Fishing",
    categorySlug: "fishing",
    image: "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=800&q=80",
    date: "2024-01-12",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: "3",
    slug: "hiking-backpacks-comparison",
    title: "Trail-Tested: Comparing the Best 50L Hiking Backpacks",
    excerpt: "We carried these packs through 200+ miles to find the perfect balance of comfort, durability, and organization.",
    category: "Hiking",
    categorySlug: "hiking",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    date: "2024-01-10",
    readTime: "12 min read",
  },
  {
    id: "4",
    slug: "survival-knives-guide",
    title: "The Ultimate Guide to Survival Knives: What to Look For",
    excerpt: "A quality survival knife can mean the difference between comfort and crisis. Here's how to choose the right one.",
    category: "Gear Reviews",
    categorySlug: "gear-reviews",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80",
    date: "2024-01-08",
    readTime: "9 min read",
  },
  {
    id: "5",
    slug: "hunting-binoculars-review",
    title: "Top 5 Hunting Binoculars Under $500",
    excerpt: "Crystal-clear optics don't have to cost a fortune. We found the best mid-range binoculars for serious hunters.",
    category: "Hunting",
    categorySlug: "hunting",
    image: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=800&q=80",
    date: "2024-01-05",
    readTime: "7 min read",
  },
  {
    id: "6",
    slug: "ultralight-tents-2024",
    title: "Ultralight Tents That Won't Sacrifice Durability",
    excerpt: "Sub-2-pound shelters that can handle real mountain conditions. We put 8 models to the test.",
    category: "Camping",
    categorySlug: "camping",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
    date: "2024-01-03",
    readTime: "11 min read",
  },
  {
    id: "7",
    slug: "best-tackle-boxes",
    title: "The Best Tackle Boxes and Bags for Every Angler",
    excerpt: "Keep your lures, hooks, and line organized with these top-rated tackle storage solutions.",
    category: "Fishing",
    categorySlug: "fishing",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    date: "2024-01-01",
    readTime: "6 min read",
  },
  {
    id: "8",
    slug: "trekking-poles-review",
    title: "Why Trekking Poles Are Worth It (And Which Ones to Buy)",
    excerpt: "Reduce knee strain and boost stability with these trail-proven trekking poles.",
    category: "Hiking",
    categorySlug: "hiking",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    date: "2023-12-28",
    readTime: "8 min read",
  },
];

// Sample product for product boxes
export const sampleProduct: Product = {
  id: "prod-1",
  name: "MSR PocketRocket Deluxe Ultralight Camping Stove",
  description: "The PocketRocket Deluxe is one of the most reliable ultralight stoves on the market. It features pressure regulation for consistent performance in cold weather and high altitude, plus a piezo igniter for easy starts.",
  image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
  amazonUrl: "https://amazon.com",
  rating: "4.8/5 (2,341 reviews)",
  badge: "Editor's Choice",
};

// Sample comparison products
export const comparisonProducts: ComparisonProduct[] = [
  {
    id: "comp-1",
    name: "MSR PocketRocket Deluxe",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200&q=80",
    price: "$69.95",
    rating: "4.8",
    features: {
      "Weight": "3.0 oz",
      "Boil Time": "3.5 min",
      "Piezo Igniter": true,
      "Wind Resistant": false,
      "Simmer Control": true,
    },
    amazonUrl: "https://amazon.com",
    badge: "Best Overall",
  },
  {
    id: "comp-2",
    name: "Jetboil MiniMo",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200&q=80",
    price: "$134.95",
    rating: "4.7",
    features: {
      "Weight": "14.6 oz",
      "Boil Time": "2.25 min",
      "Piezo Igniter": true,
      "Wind Resistant": true,
      "Simmer Control": true,
    },
    amazonUrl: "https://amazon.com",
    badge: "Best Integrated",
  },
  {
    id: "comp-3",
    name: "BRS Ultralight Stove",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200&q=80",
    price: "$16.99",
    rating: "4.4",
    features: {
      "Weight": "0.9 oz",
      "Boil Time": "4.5 min",
      "Piezo Igniter": false,
      "Wind Resistant": false,
      "Simmer Control": false,
    },
    amazonUrl: "https://amazon.com",
    badge: "Budget Pick",
  },
];

// Category data
export const categories = [
  {
    name: "Fishing",
    slug: "fishing",
    description: "Rods, reels, tackle, and everything you need to land the big one.",
    count: 24,
  },
  {
    name: "Camping",
    slug: "camping",
    description: "Tents, stoves, sleeping gear, and camp essentials for any adventure.",
    count: 31,
  },
  {
    name: "Hiking",
    slug: "hiking",
    description: "Backpacks, footwear, navigation, and trail-tested gear reviews.",
    count: 28,
  },
  {
    name: "Hunting",
    slug: "hunting",
    description: "Optics, apparel, accessories, and gear for the ethical hunter.",
    count: 19,
  },
  {
    name: "Gear Reviews",
    slug: "gear-reviews",
    description: "In-depth reviews of the best outdoor gear across all categories.",
    count: 45,
  },
];

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter(post => post.categorySlug === categorySlug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter(post => post.featured);
}

export function getRecentPosts(count: number = 6): Post[] {
  return posts.slice(0, count);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}
