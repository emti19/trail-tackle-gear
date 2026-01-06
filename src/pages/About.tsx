import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="heading-1 mb-6">About Trail & Tackle</h1>
            <p className="body-large text-muted-foreground">
              We believe the right gear shouldn't be a mystery. Our mission is 
              simple: honest, thorough reviews that help you spend less time 
              researching and more time exploring.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose-editorial"
            >
              <h2>Our Story</h2>
              
              <p>
                Trail & Tackle started from a simple frustration: too many gear 
                reviews felt like thinly veiled advertisements. We wanted something 
                different—real-world testing, honest opinions, and recommendations 
                you could actually trust.
              </p>

              <p>
                Today, we're a small team of outdoor enthusiasts who spend our 
                weekends on trails, rivers, and campsites. Every product we review 
                gets tested in actual conditions, not just unboxed in a studio.
              </p>

              <h2>What We Cover</h2>

              <p>
                Our focus areas include:
              </p>

              <ul>
                <li><strong>Fishing:</strong> From fly rods to tackle boxes, we cover freshwater and saltwater gear</li>
                <li><strong>Camping:</strong> Tents, stoves, sleeping systems, and camp comfort</li>
                <li><strong>Hiking:</strong> Backpacks, footwear, navigation, and trail essentials</li>
                <li><strong>Hunting:</strong> Optics, apparel, and ethical hunting gear</li>
                <li><strong>General Gear:</strong> Knives, tools, and multi-use outdoor equipment</li>
              </ul>

              <h2>Our Review Process</h2>

              <p>
                We don't do quick unboxings. Our testing process involves:
              </p>

              <ul>
                <li>Multiple trips with each piece of gear</li>
                <li>Testing in varied conditions (weather, terrain, seasons)</li>
                <li>Long-term durability assessment when possible</li>
                <li>Comparison with competitors at similar price points</li>
                <li>Honest disclosure of any issues or limitations</li>
              </ul>

              <h2>Affiliate Disclosure</h2>

              <p>
                Trail & Tackle is a participant in the Amazon Services LLC Associates 
                Program. When you purchase through our links, we may earn a small 
                commission at no extra cost to you. This helps keep the site running 
                and supports our testing efforts.
              </p>

              <p>
                <strong>Important:</strong> Affiliate relationships never influence our 
                reviews. We recommend products based on our honest assessment, not 
                commission rates. If a product doesn't meet our standards, we won't 
                recommend it—period.
              </p>

              <h2>Get in Touch</h2>

              <p>
                Have a question about a product? Spotted something we should review? 
                We'd love to hear from you. While we can't respond to every message, 
                we read everything and use your feedback to guide future content.
              </p>

              <div className="divider-editorial mt-12" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="caption text-background/70 mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="heading-4 mb-4">Honesty First</h3>
                <p className="text-background/70">
                  We tell you what works, what doesn't, and what's worth your money. 
                  No sugarcoating, no paid promotions disguised as reviews.
                </p>
              </div>
              <div>
                <h3 className="heading-4 mb-4">Real Testing</h3>
                <p className="text-background/70">
                  Every product gets taken into the field. We believe you can only 
                  judge gear by using it in the conditions it's designed for.
                </p>
              </div>
              <div>
                <h3 className="heading-4 mb-4">Respect for Nature</h3>
                <p className="text-background/70">
                  Leave no trace isn't just a saying—it's how we operate. We support 
                  sustainable practices and responsible outdoor recreation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
