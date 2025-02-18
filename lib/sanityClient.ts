import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Room } from "@/app/custom_components/home/rooms";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-21", // Use current date
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

// Helper function for generating image URLs with the Sanity Image Pipeline
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: SanityImageSource) => builder.image(source);

// Typed fetch function for rooms
export async function getRooms() {
  const rooms = await sanityClient.fetch(`
    *[_type == "room"] {
      _id,
      name,
      description,
      mainImage,
      weekdayPrice,
      weekendPrice,
    } | order(name asc)
  `);

  // Sort "Entire Basement" to the end
  return rooms.sort((a: Room, b: Room) => {
    if (a.name === "Full Basement") return 1;
    if (b.name === "Full Basement") return -1;
    return 0;
  });
}
