import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="heading-display mb-6">404</h1>
        <p className="body-large text-muted-foreground mb-8">
          Looks like you've wandered off the trail. Let's get you back.
        </p>
        <Link to="/" className="btn-affiliate-primary">
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
