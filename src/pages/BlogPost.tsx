import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductBox } from "@/components/affiliate/ProductBox";
import { ComparisonTable } from "@/components/affiliate/ComparisonTable";
import { AffiliateDisclaimer } from "@/components/affiliate/AffiliateDisclaimer";
import { PostCard } from "@/components/blog/PostCard";
import { getPostBySlug, getRecentPosts, sampleProduct, comparisonProducts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");
  const relatedPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="heading-2 mb-4">Post Not Found</h1>
          <Link to="/" className="btn-affiliate">
            Return Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Article Header */}
      <article>
        <header className="border-b border-border">
          <div className="container mx-auto px-6 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <Link
                  to={`/category/${post.categorySlug}`}
                  className="caption hover:opacity-70 transition-opacity"
                >
                  {post.category}
                </Link>
              </div>

              <h1 className="heading-1 max-w-4xl mb-6 text-balance">
                {post.title}
              </h1>

              <p className="body-large text-muted-foreground max-w-3xl mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="border-b border-border">
          <div className="container mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[21/9] overflow-hidden bg-secondary"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose-editorial"
            >
              <AffiliateDisclaimer />

              <p>
                When you're miles from civilization, your gear becomes your lifeline. 
                That's why we spent three months testing the most popular options on the 
                market—pushing each piece of equipment to its limits in real backcountry conditions.
              </p>

              <p>
                Whether you're planning a weekend car camping trip or a multi-week thru-hike, 
                choosing the right equipment can make or break your experience. In this comprehensive 
                guide, we'll break down exactly what to look for and which products deliver the 
                best value for your investment.
              </p>

              <h2>Our Testing Process</h2>

              <p>
                We don't just read spec sheets—we take gear into the field. Each product in this 
                guide was tested over multiple trips in varying conditions, from desert heat to 
                alpine cold. We evaluated durability, ease of use, weight, packability, and 
                overall value.
              </p>

              <h2>Our Top Pick</h2>

              <ProductBox product={sampleProduct} />

              <p>
                After extensive testing, this stood out as our editor's choice. The combination 
                of reliability, performance, and reasonable weight made it the clear winner for 
                most users. It's not the cheapest option, but the build quality justifies the 
                investment for anyone serious about their outdoor pursuits.
              </p>

              <h2>Head-to-Head Comparison</h2>

              <p>
                To help you make an informed decision, we've compiled our findings into a 
                comparison table. Each product was evaluated on the same criteria under 
                identical conditions.
              </p>

              <ComparisonTable
                title="Camping Stove Comparison"
                products={comparisonProducts}
                featureLabels={["Weight", "Boil Time", "Piezo Igniter", "Wind Resistant", "Simmer Control"]}
              />

              <h2>What to Consider Before Buying</h2>

              <p>
                Before making your purchase, consider these key factors:
              </p>

              <ul>
                <li><strong>Your typical use case:</strong> Will you be car camping or backpacking?</li>
                <li><strong>Weather conditions:</strong> Cold weather and altitude affect performance</li>
                <li><strong>Group size:</strong> Solo travelers have different needs than families</li>
                <li><strong>Weight priorities:</strong> Every ounce matters on long trails</li>
                <li><strong>Budget:</strong> Sometimes paying more upfront saves money long-term</li>
              </ul>

              <h2>Final Thoughts</h2>

              <p>
                The best gear is the gear that gets you outside. While we've done our best to 
                provide thorough, honest reviews, the most important thing is finding equipment 
                that suits your specific needs and gets you out on the trail.
              </p>

              <p>
                Have questions about any of the products we reviewed? Drop them in the comments 
                below, and we'll do our best to help you make the right choice for your next adventure.
              </p>

              <AffiliateDisclaimer />
            </motion.div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <h2 className="caption mb-12">More to Explore</h2>
          <div className="grid-editorial">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
