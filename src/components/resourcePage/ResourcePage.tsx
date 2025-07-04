import { Resource } from "@/types/resources";
import KeyMetricsSection from "./KeyMetricsSection";
import CommentsSection from "../comments/CommentsSection";
import FeaturedCommentSection from "../comments/FeaturedCommentSection";
import ResourceDetailsSection from "./ResourceDetailsSection";
import ResourceGallery from "./ResourceGallery";

const featuredComment = {
  id: 1,
  avatar: "https://cbub.comicbookuniversebattles.com/static/images/cbub/cbub_contender_image/2/11740/11740.png",
  name: "anya",
  date: "2025-06-03",
  comment: "I really had fun at this programme! For anyone hesitating, you never know until you try it out.",
  likes: 14,
};

export default function ResourcePage({ resource }: { resource: Resource | null }) {
  if (!resource) {
    return <div className="text-center text-gray-500">Something went wrong - try reselecting your filters!</div>;
  }
  return (
    <div className="w-full h-full px-8 flex flex-col items-start space-y-8">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-lg font-semibold truncate w-full" title={resource.programme_name}>{resource.programme_name}</h1>
        <a 
          href={resource.org_website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-amber-500 hover:underline truncate w-full"
          title={resource.organization_name}
        >
          {resource.organization_name}
        </a>
      </div>
      <ResourceGallery items={resource.gallery || []} />
      <KeyMetricsSection resource={resource} />
      <FeaturedCommentSection comment={featuredComment} />
      <ResourceDetailsSection resource={resource} />
      <CommentsSection />
    </div>
  );
}
