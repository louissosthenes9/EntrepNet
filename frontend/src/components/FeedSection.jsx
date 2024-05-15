import React from 'react'
import Image from 'next/image'
import { PostsList } from '../lib/Posts'
export default function FeedSection() {
  return (
    <>
      <div className='flex flex-col gap-y-4 mt-12'>
        {
          PostsList.map((following, index) => (

            // Display the list of hardCorded tweets
            <div key={index}>

            {/* This is for the user and the profile */}
              <div
                className="flex gap-x-1 flex-shrink items-center"
                key={following.name}
              >
                <div>
                  <Image
                    src={following.profilePic}
                    width={40}
                    height={40}
                    alt="profile"
                  />
                </div>

                <div className="grid grid-cols-1">
                  <div className="text-white text-sm text-nowrap">{following.name}</div>
                  <div className="flex space-x-1 items-center text-white">
                    <div className="text-xs">{following.role}</div>
                    <div className="text-white">|</div>
                    <div className="text-white text-xs text-nowrap">{following.job}</div>
                  </div>
                </div>
              </div>
            

            {/* This is the div for tweets */}
               <div className='text-white font-thin text-sm my-4'>{following.postContent}</div>

            {/* This is the div for images */}
              <div>
                <Image 
                src={following.src}
                width={400}
                height={250}
                alt='Post'
                />
              </div>

            </div>


          ))
        }
      </div>

    </>
  )
}
