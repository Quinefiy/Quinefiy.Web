"use client";

import { useEffect, useState } from "react";
import createDOMPurify from "dompurify";
import parse from "html-react-parser";

export default function ServiceRichText({ html }: { html: string }) {
  const [clean, setClean] = useState<string>("");

  useEffect(() => {
    // only runs in browser
    const DOMPurify = createDOMPurify(window);
    setClean(DOMPurify.sanitize(html));
  }, [html]);

  if (!clean) return null;

  return (
    <ul className="text-[#FFFFFF] space-y-[8px] xl:tracking-[1.8px] xl:text-[18px] lg:tracking-[1.7px] lg:text-[17px] md:tracking-[1.6px] md:text-[16px] sm:tracking-[1.5px] sm:text-[15px] tracking-[1.4px] text-[14px] font-medium leading-[160%] pl-[18px] list-disc">
      {parse(clean)}
    </ul>
  );
}