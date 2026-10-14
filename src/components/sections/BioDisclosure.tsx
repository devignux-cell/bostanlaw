"use client";

import { useId, useState, type ReactNode } from "react";

export function BioDisclosure({
  readFullBio,
  showLess,
  children,
}: {
  readFullBio: string;
  showLess: string;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  return (
    <>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setExpanded((current) => !current)}
        className="mt-5 inline-flex min-h-11 items-center border-b-2 border-brand text-[15px] font-bold text-ink hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        {expanded ? showLess : readFullBio}
      </button>
      <div id={contentId} hidden={!expanded} className="mt-5 space-y-5">
        {children}
      </div>
    </>
  );
}
