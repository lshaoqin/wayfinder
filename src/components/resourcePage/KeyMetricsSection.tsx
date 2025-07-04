import { Resource } from "@/types/resources";
import { Banknote, BookHeart, BookLock, Clock } from "lucide-react";

const metrics = [
	{
		key: "availability",
		label: "Availability",
		icon: <Clock className="w-5 h-5 text-amber-500" />,
        textColor: "text-amber-900"
	},
	{
		key: "anonymous",
		label: "Anonymous",
		icon: <BookLock className="w-5 h-5 text-blue-500" />,
        textColor: "text-blue-900",
        strTransform: (str: string) => str === "true" ? "Yes" : "No"
	},
	{
		key: "cost",
		label: "Cost",
		icon: <Banknote className="w-5 h-5 text-green-500" />,
        textColor: "text-green-900"
	},
	{
		key: "modality",
		label: "Modality",
		icon: <BookHeart className="w-5 h-5 text-red-500" />,
        textColor: "text-red-900"
	},
];

export default function KeyMetricsSection({ resource }: { resource: Resource }) {
	return (
		<div className="w-full grid grid-cols-2 grid-rows-2">
			{metrics.map((metric, i) => {
                let metricValue = resource[metric.key as keyof Resource]?.toString();
                if (metricValue === undefined) {
                    return null;
                }

                if (metric.strTransform) {
                    metricValue = metric.strTransform(metricValue);
                }

                // Add left border if not first column, top border if not first row
                const borderClasses = `${i % 2 !== 0 ? 'border-l border-gray-300' : ''} ${i > 1 ? 'border-t border-gray-300' : ''}`;

                return (
				<div
					key={metric.key}
					className={`flex items-center gap-3 p-4 min-h-[80px] w-full ${borderClasses}`}
					style={{ minWidth: 0 }}
				>
					<div className="flex-shrink-0">
                        {metric.icon}
                    </div>
					<div className="flex flex-col min-w-0 w-full">
						<span className="text-xs text-gray-500 truncate">{metric.label}</span>
						<span
							className={`text-base md:text-lg font-medium break-words overflow-hidden ${metric.textColor}`}
							style={{
								fontSize: metricValue.length > 15 ? "clamp(0.85rem, 2vw, 1.25rem)" : "clamp(1rem, 2vw, 1.25rem)",
								display: "-webkit-box",
								WebkitLineClamp: 2,
								WebkitBoxOrient: "vertical",
							}}
						>
							{metricValue || "-"}
						</span>
					</div>
				</div>
			)})}
		</div>
	);
}