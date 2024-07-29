import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import campground from "../assets/campground.png"
import portfolio from "../assets/portfolio.png"
import tna from "../assets/TNA.png"
import cdn from "../assets/CDN.png"


const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
        <Card
            title="Campground Project"
            description="A full-featured campground review application where users can create accounts, post campgrounds, and review them. Developed using the MERN stack."
            imageUrl={campground}
            link="https://github.com/Vikashnaidu007/Campground"
          />
          <Card
            title="Portfolio Project"
            description="A personal portfolio website to showcase my projects, skills, and experience. Designed and developed to provide a comprehensive overview of my work."
            imageUrl={portfolio}
            link="https://github.com/Vikashnaidu007/Portfolio"
          />
          <Card
            title="Trending News Social Media Platform"
            description="A social media platform focused on trending news, allowing users to share, discuss, and stay updated. Implemented real-time news feeds, secure user authentication, and responsive user interfaces using React."
            imageUrl={tna}
            link="https://github.com/SHYAM-PALAKURTHI/TRENDING-NEWS-SOCIAL-APPLICATION"
          />
          <Card
            title="Inventory Management System"
            description="A comprehensive inventory management system for tracking and managing product inventory across multiple warehouses. Implemented modules for tracking and reporting inventory, developed RESTful APIs, and created dynamic user interfaces using AngularJS."
            imageUrl="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
            link="https://github.com/Vikashnaidu007"
          />
          <Card
            title="Content Delivery Network (CDN)"
            description="A scalable CDN to efficiently deliver digital content across multiple geographic locations. Implemented content caching and distribution using AWS CloudFront, and developed RESTful APIs with Node.js and Express.js."
            imageUrl={cdn}
            link="https://github.com/Vikashnaidu007"
          />
          
         
          
        </div>
        <a
          href="https://github.com/Vikashnaidu007"
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
