import { motion } from "framer-motion";
import { Image } from "@devtoolstech/design-system/image";

import IllustrationOne from "../images/1.jpg";
import IllustrationTwo from "../images/2.jpg";
import IllustrationThree from "../images/3.jpg";
import IllustrationFour from "../images/4.jpg";
import IllustrationFive from "../images/5.jpg";
import IllustrationSix from "../images/6.jpg";

const Feature = ({ title, description, graphic }) => {
  return (
    <motion.div
      key={index}
      className="grid md:grid-cols-2 gap-6 items-center"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Text Block */}
      <div className="text-left space-y-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      {/* Image Block */}
      <div className="flex justify-center">
        <Image
          src={graphic}
          alt={title}
          className="w-full h-auto max-w-xs rounded-2xl shadow-md"
        />
      </div>
    </motion.div>
  );
};

function Features() {
  return (
    <div className="grid gap-8 p-8 max-w-5xl mx-auto">
      <Feature
        title="Feature One"
        description="Description of feature one"
        imageUrl={IllustrationOne}
      />
      <Feature
        title="Feature Two"
        description="Description of feature two"
        imageUrl={IllustrationTwo}
      />
      <Feature
        title="Feature Three"
        description="Description of feature three"
        imageUrl={IllustrationThree}
      />
      <Feature
        title="Feature Four"
        description="Description of feature four"
        imageUrl={IllustrationFour}
      />
      <Feature
        title="Feature Five"
        description="Description of feature five"
        imageUrl={IllustrationFive}
      />
      <Feature
        title="Feature Six"
        description="Description of feature Six"
        imageUrl={IllustrationSix}
      />
    </div>
  );
}

export default Features;
