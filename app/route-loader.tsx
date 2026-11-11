"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function RouteLoader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const previousPathname = useRef(pathname);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timer.current = setTimeout(() => setIsVisible(false), 2000);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    setIsVisible(true);

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setIsVisible(false), 1000);
  }, [pathname]);

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="site-loader-backdrop" role="status" aria-live="polite" aria-label="Loading Mane & Maison">
      <div className="site-loader-content">
        <div className="banter-loader" aria-hidden="true">
          {Array.from({ length: 9 }, (_, index) => <span className="banter-loader__box" key={index} />)}
        </div>
        <p className="site-loader-name">Mane &amp; Maison</p>
        <span className="site-loader-note">Preparing your sanctuary</span>
      </div>
    </div>
  );
}
