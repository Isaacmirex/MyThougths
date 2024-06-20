/* eslint-disable no-unused-vars */
import React from "react";
import { dataMythoughts } from "../data/data.js";

const carouselMythougths = [...dataMythoughts, ...dataMythoughts];

const CardBlog = () => {
  const getBlogImageURL = (blogId) => {
    const imageUrls = {
      1: "https://burst.shopifycdn.com/photos/thoughtful-men-s-fashion-pose.jpg?width=373&format=pjpg&exif=0&iptc=0",
      2: "https://burst.shopifycdn.com/photos/calendar-page-with-may-at-the-top.jpg?width=373&format=pjpg&exif=0&iptc=0",
      3: "https://burst.shopifycdn.com/photos/a-bowl-of-colourful-muesli.jpg?width=373&format=pjpg&exif=0&iptc=0",
      4: "https://burst.shopifycdn.com/photos/woman-sleeping-in-hotel-room.jpg?width=373&format=pjpg&exif=0&iptc=0",
      5: "https://burst.shopifycdn.com/photos/a-red-purse-spills-feminine-products-onto-a-table.jpg?width=373&format=pjpg&exif=0&iptc=0",
      6: "https://burst.shopifycdn.com/photos/lifting-weights.jpg?width=373&format=pjpg&exif=0&iptc=0",
      7: "https://burst.shopifycdn.com/photos/person-holds-a-sign-with-message-ask-for-help.jpg?width=373&format=pjpg&exif=0&iptc=0",
    };

    return imageUrls[blogId];
  };

  const getAuthorEmoji = (authorId) => {
    const emojiMap = {
      1: "💭",
      2: "📆",
      3: "🍴",
      4: "💤",
      5: "🩸",
      6: "💪",
      7: "📝",
    };

    return emojiMap[authorId] || "❓"; // Emoji predeterminado en caso de que el autor no esté mapeado
  };
  const getBlogRoute = (blogId) => {
    const routeMap = {
      1: "/home",
      2: "/mycalendar",
      3: "/mydiet",
      4: "/mydreams",
      5: "/mymestrualcalendar",
      6: "/myphysicalactivity",
      7: "/mypysicologytest",
    };

    return routeMap[blogId] || "/";
  };

  return (
    <div className="container my-5">
      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-scroll">
          {carouselMythougths.map((blog, index) => (
            <div
              className="h-full w-[400px] m-2 flex-shrink-0 cursor-pointer"
              key={index}
            >
              <div className="rounded-3xl overflow-hidden mb-4 relative h-[250px]">
                <a href={getBlogRoute(blog.id)}>
                  <img src={getBlogImageURL(blog.id)} alt={blog.title} />
                  <span className="absolute top-3 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-blue-100">
                    {blog.category}
                  </span>
                </a>
              </div>
              <div className="px-4 flex gap-4">
                <span
                  role="img"
                  aria-label="Author Emoji"
                  className="object-cover w-12 h-12 rounded-full"
                >
                  {getAuthorEmoji(blog.id)}
                </span>
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-lg font-bold text-slate-700 leading-7 whitespace-normal">
                    {blog.title}
                  </h3>
                  <div className="flex gap-4">
                    <p className="text-sm text-slate-800 font-semibold">
                      {blog.author}
                    </p>
                    <p className="text-sm text-gray-500 font-normal">
                      {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="footer">
        <p>Desarrollado por Isaac Romero (CatDev)- 2024</p>
      </div> */}
    </div>
  );
};

export default CardBlog;
