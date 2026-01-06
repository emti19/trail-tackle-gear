import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PostCard } from "@/components/blog/PostCard";
import { getPostsByCategory, categories } from "@/data/posts";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  const posts = getPostsByCategory(slug || "");

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="heading-2 mb-4">Category Not Found</h1>
          <Link to="/" className="btn-affiliate">
            Return Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Category Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
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

            <h1 className="heading-1 mb-4">{category.name}</h1>
            <p className="body-large text-muted-foreground max-w-2xl mb-6">
              {category.description}
            </p>
            <div className="divider-editorial" />
          </motion.div>
        </div>
      </header>

      {/* Posts Grid */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
          {posts.length > 0 ? (
            <div className="grid-editorial">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="body-large text-muted-foreground mb-6">
                No posts in this category yet. Check back soon!
              </p>
              <Link to="/" className="btn-affiliate">
                Browse All Posts
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <h2 className="caption mb-12">Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter(c => c.slug !== slug)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="p-4 border border-border bg-background hover:bg-secondary transition-colors group"
                >
                  <h3 className="font-heading font-semibold group-hover:opacity-70 transition-opacity">
                    {cat.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {cat.count} articles
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Category;
