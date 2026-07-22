// Single source of truth for customer reviews. Both the visible testimonials
// (Review.astro) and the JSON-LD review markup on the home page read from here,
// so the star ratings on the page always match the structured data — a
// requirement for Google's review rich results.

export interface CustomerReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

const DAY = 24 * 60 * 60;
const now = Math.floor(Date.now() / 1000);

export const reviews: CustomerReview[] = [
  {
    author_name: "Kevin Yu",
    rating: 5,
    text: "Austin really helped me bring some of my ideas closer to reality. He's very knowledgeable in his domain and was able to suggest ways we could bring my vision to life, whether it's my portfolio site or smaller ideas that just randomly popped up as I engaged with him. I found Austin to be extremely professional, timely, and overall a great resource when it comes to all of my website inquiries. 5/5 and I strongly recommend going with his services if you want to take an idea all the way to completion.",
    relative_time_description: "11 weeks ago",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjX8YjtqSNrj0AXbVqu9tip6YWURpVGMyPFSRJunxqc0cauQgaJb1w=s40-c-rp-mo-ba6-br100",
    time: now - 14 * DAY,
  },
  {
    author_name: "Cookie",
    rating: 5,
    text: "Working with kitty code creative on my website was easy and fluid, they responded to my requests the same day and pitched in a lot of ideas that ended up being better than what i'd come up with anyway. The website they've made me is now my landing pad for everyone on the internet to get to know me as a brand so i'm beyond thrilled with how it's all turned out.",
    relative_time_description: "7 months ago",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUW7BiryhWt2ITlZVGbxXopaf-H3__GS6r8Yk6UmtSdQaYYjKo=s40-c-rp-mo-br100",
    time: now - 30 * DAY,
  },
  {
    author_name: "Rose Butcher",
    rating: 5,
    text: "Austin really impressed me with their attention to detail when designing my new business website. Every part was so well thought out, and I appreciated them going the extra mile to add in the interactive and animated elements I asked for. To any startup small business, entrepreneur, or influencer looking for a responsive, fast and aesthetically pleasing website, I'd definitely recommend Kitty Code Creative! 😺",
    relative_time_description: "12 months ago",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjXPxC0okuyqcHzOYTnXBqq_JogI3MtR3RXlieBx0dVGS4Nfebz8=s40-c-rp-mo-br100",
    time: now - 60 * DAY,
  },
];

/** Average star rating across all reviews, e.g. "5.0". */
export const averageRating = (
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);

/**
 * schema.org AggregateRating + Review nodes built from the reviews above, for
 * embedding in the Organization's JSON-LD. Only include this where the same
 * reviews are visible on the page.
 */
export const reviewSchema = {
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: averageRating,
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author_name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
  })),
};
