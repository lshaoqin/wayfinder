"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function CommentLikes({ likes }: { likes: number }) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="flex flex-col items-center">
        <Heart
            className={`h-5 w-5 text-pink-400 cursor-pointer`}
            fill={isLiked ? "currentColor" : "none"}
            onClick={() => setIsLiked(!isLiked)}
        />
        <span className={"text-sm text-pink-400"}>
            {isLiked ? likes + 1 : likes}
        </span>
        </div>
    );
}