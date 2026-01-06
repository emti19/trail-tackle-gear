import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PostCard } from "@/components/blog/PostCard";
import { getFeaturedPosts, getRecentPosts, categories } from "@/data/posts";

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="heading-display mb-6">
              Trail & Tackle
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mb-8">
              Honest outdoor gear reviews for adventurers. We test the gear so you can 
              focus on the journey—from remote rivers to mountain peaks.
            </p>
            <div className="divider-editorial" />
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="border-b border-border">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="caption">Featured Stories</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <h2 className="caption mb-12">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/category/${category.slug}`}
                  className="block p-6 border border-border bg-background hover:bg-secondary transition-colors group"
                >
                  <h3 className="heading-4 mb-2 group-hover:opacity-70 transition-opacity">
                    {category.name}
                  </h3>
                  <p className="body-small text-muted-foreground mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="caption text-muted-foreground">
                    {category.count} articles
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="caption">Latest Reviews</h2>
            <Link
              to="/category/gear-reviews"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid-editorial">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-4">Stay on the Trail</h2>
            <p className="body-large text-background/70 mb-8">
              Get our best gear picks and outdoor tips delivered weekly. 
              No spam, just honest reviews.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-background text-foreground border-0 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
