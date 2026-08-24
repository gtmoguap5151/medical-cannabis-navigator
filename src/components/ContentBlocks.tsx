import { Info } from 'lucide-react';
import type { ContentBlock } from '@/data/course';

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-lesson">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h':
            return <h3 key={i}>{block.text}</h3>;
          case 'p':
            return <p key={i}>{block.text}</p>;
          case 'ul':
            return (
              <ul key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            );
          case 'callout':
            return (
              <div key={i} className="my-6 flex gap-3 rounded-xl border border-sand-300 bg-sand-100 p-4 text-sm text-ink-700">
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-sand-700" />
                <p className="m-0">{block.text}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
