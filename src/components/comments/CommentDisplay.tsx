import { Comment } from "@/types/comments";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CommentLikes from "./CommentLikes";

export default function CommentDisplay({ comment }: { comment: Comment }) {
  return (
    <div className="relative flex items-start space-x-4 p-2 pr-10">
      <div className="flex justify-center">
        <Avatar className="w-12 h-12 border-2 border-amber-400">
          <AvatarImage src={comment.avatar} alt={comment.name} />
          <AvatarFallback>{comment.name}</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-sm font-bold text-orange-300">{comment.name}</p>
        <p className="text-xs text-gray-500">{comment.date}</p>
        <p className="mt-1 text-sm italic">{comment.comment}</p>
      </div>
      <span className="absolute top-2 right-4">
        <CommentLikes likes={comment.likes} />
      </span>
    </div>
  );
}