import ReactMarkdown from "react-markdown";

interface GetStartedGuideProps {
  content: string;
  onClose: () => void;
}

export default function GetStartedGuide({ content, onClose }: GetStartedGuideProps) {
  return (
    <div className="fixed p-2 inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="prose prose-sm relative bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="font-sans text-lg leading-relaxed">
            <ReactMarkdown components={{
                a: ({ href, children }) => (
                <a
                    href={href}
                    target="_blank"
                    className="text-blue-600 underline"
                >
                    {children}
                </a>
                ),
                ol: ({children}) => (
                  <ol className="pl-5 list-disc">
                    {children}
                  </ol>
                )
            }}
            >{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
