import { Comment } from "@/types/comments";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function FeaturedCommentSection({ comment }: { comment: Comment }) {
  return (
    <div className="flex items-center space-x-4 p-2">
      <div className="flex justify-center items-center h-full">
        <Avatar className="w-12 h-12 border-2 border-amber-400">
          <AvatarImage src={comment.avatar} alt={comment.name} />
          <AvatarFallback>{comment.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1">
        <p className="text-sm italic text-gray-500 line-clamp-3">{comment.comment}</p>
      </div>
    </div>
  );
}