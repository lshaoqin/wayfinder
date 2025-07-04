import SupportOptionButton, { SupportOption } from './SupportOptionButton';
import { Tag } from "@/types/filters";

const options: SupportOption[] = [
  { emoji: '😰', label: 'Anxiety & Worry', tag: Tag.Anxiety, color: 'bg-blue-100' },
  { emoji: '😔', label: 'Feeling Alone', tag: Tag.Community, color: 'bg-purple-100'},
  { emoji: '😵', label: 'Burnout & Stress', tag: Tag.Burnout, color: 'bg-red-100'},
  { emoji: '💙', label: 'Feeling Down', tag: Tag.Help, color: 'bg-orange-100'},
  { emoji: '🏡', label: 'Family Issues', tag: Tag.Home, color: 'bg-yellow-100'},
  { emoji: '📚', label: 'Feel Directionless', tag: Tag.Career, color: 'bg-green-100'},
];

export default function SupportGrid() {
  return (
    <section className="grid grid-cols-2 gap-4 px-4 pb-10">
      {options.map((opt, i) => (
        <SupportOptionButton key={i} supportOption={opt} />
      ))}
    </section>
  );
}
