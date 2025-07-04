import CommentAdd from "./CommentAdd";
import CommentDisplay from "./CommentDisplay";
import { Comment } from "@/types/comments";

export const comments: Comment[] = [
    {
        id: 1,
        avatar: "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
        name: "bulbasaur",
        date: "2025-06-03",
        comment: "Super friendly, I came in with many doubts but the staff were so willing to listen and gave me lots of helpful advice.",
        likes: 12
    },
    {
        id: 2,
        avatar: "https://m.media-amazon.com/images/I/71FywacwOaL._UF1000,1000_QL80_.jpg",
        name: "littlemisssunshine",
        date: "2025-06-01",
        comment: "Great experience, even if you are just looking for a casual chat about life.",
        likes: 8
    }
];

export default function CommentsSection() {
	return (
		<div>
			<h2 className="text-md font-semibold">What others are saying...</h2>
			{comments.map((comment) => (
				<CommentDisplay key={comment.id} comment={comment} />
			))}
            <CommentAdd />
		</div>
	);
}