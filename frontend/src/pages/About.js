import React from "react";
import { FaUtensils, FaHistory, FaStar, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to Kanak's Cafe
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Where tradition meets innovation in every dish we serve. Our journey started
          with a simple passion for food and has grown into a beloved culinary destination.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <FeatureCard
          icon={<FaUtensils className="text-4xl text-red-500" />}
          title="Quality Food"
          description="We use only the finest ingredients to create memorable dishes that delight our customers."
        />
        <FeatureCard
          icon={<FaHistory className="text-4xl text-red-500" />}
          title="Rich History"
          description="Serving the community since 2020, we've built our reputation on consistency and excellence."
        />
        <FeatureCard
          icon={<FaStar className="text-4xl text-red-500" />}
          title="Expert Chefs"
          description="Our talented culinary team brings years of experience and passion to every dish."
        />
        <FeatureCard
          icon={<FaUsers className="text-4xl text-red-500" />}
          title="Customer First"
          description="Your satisfaction is our priority. We strive to exceed expectations with every visit."
        />
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="prose text-gray-600">
            <p className="mb-4">
              Founded in 2020, Kanak's Cafe began with a vision to create a dining
              experience that combines the rich flavors of traditional cuisine with
              modern culinary innovations.
            </p>
            <p className="mb-4">
              What started as a small family-run establishment has grown into a
              beloved destination for food enthusiasts. Our menu features a carefully
              curated selection of dishes, from classic favorites to innovative
              specialties.
            </p>
            <p>
              Today, we continue to uphold our commitment to quality, service, and
              community. Every dish we serve is a testament to our passion for
              food and dedication to our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default About;
