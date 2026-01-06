import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

interface PostCardProps {
  post: Post;
  variant?: "default" | "featured" | "horizontal";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group"
      >
        <Link to={`/post/${post.slug}`} className="block">
          <div className="aspect-[16/10] overflow-hidden bg-secondary mb-6">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="caption text-muted-foreground">{post.category}</span>
              <span className="caption text-muted-foreground">{post.readTime}</span>
            </div>
            <h2 className="heading-2 group-hover:opacity-70 transition-opacity text-balance">
              {post.title}
            </h2>
            <p className="body-large text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === "horizontal") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group flex gap-6"
      >
        <Link to={`/post/${post.slug}`} className="shrink-0 w-1/3">
          <div className="aspect-[4/3] overflow-hidden bg-secondary">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center space-y-2">
          <div className="flex items-center gap-3">
            <span className="caption text-muted-foreground">{post.category}</span>
            <span className="caption text-muted-foreground">{post.readTime}</span>
          </div>
          <Link to={`/post/${post.slug}`}>
            <h3 className="heading-4 group-hover:opacity-70 transition-opacity line-clamp-2">
              {post.title}
            </h3>
          </Link>
          <p className="body-small text-muted-foreground line-clamp-2 hidden md:block">
            {post.excerpt}
          </p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/post/${post.slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-secondary mb-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="caption text-muted-foreground">{post.category}</span>
            <span className="caption text-muted-foreground">{post.readTime}</span>
          </div>
          <h3 className="heading-4 group-hover:opacity-70 transition-opacity line-clamp-2">
            {post.title}
          </h3>
          <p className="body-small text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
