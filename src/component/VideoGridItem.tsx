import { useEffect, useRef, useState } from "react"
import { formatDuration } from "../utils/formatDuration"
import { formatTimeAgo } from "../utils/formatTimeAgo"

type VideoGridItemProps = {
    id: string
    title: string
    channel: {
      id: string
      name: string
      profileUrl: string
    }
    views: number
    postedAt: Date
    duration: number
    thumbnailUrl: string
    videoUrl: string
  }

  export function VideoGridItem({
    id,
    title,
    channel,
    views,
    postedAt,
    duration,
    thumbnailUrl,
    videoUrl,
  }: VideoGridItemProps) {
  
  
    return (
      <div
        className="flex flex-col gap-2"
      >
        <a href={`/watch?v=${id}`} className="relative aspect-video">
          <img
            src={thumbnailUrl}
            className= "block w-full h-full object-cover transition-[border-radius] duration-200"
          />
          <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          </div>
          <video
            className="block h-full object-cover absolute inset-0 transition-opacity duration-200 "
            muted
            playsInline
            src={videoUrl}
          />
        </a>
        <div className="flex gap-2">
          <a href={`/@${channel.id}`} className="flex-shrink-0">
            <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
          </a>
          <div className="flex flex-col">
            <a href={`/watch?v=${id}`} className="font-bold">
              {title}
            </a>
            <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
              {channel.name}
            </a>
            <div className="text-secondary-text text-sm">
          
            </div>
          </div>
        </div>
      </div>
    )
  }