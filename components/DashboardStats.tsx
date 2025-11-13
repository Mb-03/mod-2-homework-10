"use client";

import { useState } from "react";

const DashboardStats = () => {
  const [views, setViews] = useState(false);
  const [likes, setLikes] = useState(false);
  const [comments, setComments] = useState(false);
  const [favourites, setFavourites] = useState(false);
  return (
    <div className="max-w-[1440px] mx-auto px-12 min-h-screen mt-[200px]">
      <div className="bg-gray-500 rounded-2xl p-12 text-white flex gap-10">
        <ul className="space-y-8 border-r pr-10">
          <li>
            <button
              onClick={() => {
                views ? setViews(false) : setViews(true);
              }}
              className="cursor-pointer hover:text-gray-400"
            >
              Views
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                likes ? setLikes(false) : setLikes(true);
              }}
              className="cursor-pointer hover:text-gray-400"
            >
              Likes
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                comments ? setComments(false) : setComments(true);
              }}
              className="cursor-pointer hover:text-gray-400"
            >
              Comments
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                favourites ? setFavourites(false) : setFavourites(true);
              }}
              className="cursor-pointer hover:text-gray-400"
            >
              Favourites
            </button>
          </li>
        </ul>
        <div
          className={`${
            views ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <h2>Your Views are:</h2>
          <p className="mt-10">2004</p>
        </div>
        <div
          className={`${
            likes ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <h2>Your Likes are:</h2>
          <p className="mt-10">802</p>
        </div>
        <div
          className={`${
            comments ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <h2>Your Comments are:</h2>
          <p className="mt-10">302</p>
        </div>
        <div
          className={`${
            favourites ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <h2>Your Favourites are:</h2>
          <p className="mt-10">1004</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
