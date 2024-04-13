"use client"
import React from "react";
import Profile from "./Profile";
import Notification from "./Notification";
import FollowingList from "./FollowingsList"
export default function RightBar() {
  return (
    <div className="mt-8 ">
      <div className="flex gap-x-8">
        <Notification />
        <Profile />
      </div>
      <div>
          <div className="text-white">Suggested people</div>
           <FollowingList />
      </div>
    </div>
  );
}
