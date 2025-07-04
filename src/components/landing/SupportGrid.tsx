import { ViewType } from '@/types/views';
import SupportOptionButton, { SupportOption } from './SupportOptionButton';
import { Tag, FeelingFilterKey } from "@/types/filters";

const options: SupportOption[] = [
  { emoji: '😰', label: 'Anxiety & Worry', tag: Tag.Anxiety, color: 'bg-blue-100', filterKey: FeelingFilterKey.Anxious },
  { emoji: '😔', label: 'Feeling Alone', tag: Tag.Community, color: 'bg-purple-100', filterKey: FeelingFilterKey.NeedCommunity },
  { emoji: '😵', label: 'Burnout & Stress', tag: Tag.Burnout, color: 'bg-red-100', filterKey: FeelingFilterKey.BurnedOut },
  { emoji: '💙', label: 'Feeling Down', tag: Tag.Help, color: 'bg-orange-100', filterKey: FeelingFilterKey.NeedHelp },
  { emoji: '🏡', label: 'Family Issues', tag: Tag.Home, color: 'bg-yellow-100', filterKey: FeelingFilterKey.Homesick },
  { emoji: '📚', label: 'Feel Directionless', tag: Tag.Career, color: 'bg-green-100', filterKey: FeelingFilterKey.NeedCareerHelp },
];

export default function SupportGrid({ setViewType }: { setViewType: (viewType: ViewType) => void }) {
  return (
    <section className="grid grid-cols-2 gap-4 px-4 pb-10">
      {options.map((opt, i) => (
        <SupportOptionButton key={i} supportOption={opt} setViewType={setViewType} />
      ))}
    </section>
  );
}
