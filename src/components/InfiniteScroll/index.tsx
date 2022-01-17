import React, { ReactNode, useEffect, useRef, useState } from "react";

interface InfiniteScrollProps {
  onBottomHit: () => void;
  isLoading: boolean;
  hasMoreData: boolean;
  loadOnMount: boolean;
  children: ReactNode;
}

const isBottom = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) {
    return false;
  }

  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
};

export const InfiniteScroll = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  loadOnMount,
  children,
}: InfiniteScrollProps) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  // First fetch at the beginning
  useEffect(() => {
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  // Adding Scroll event to fetch more posts
  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [onBottomHit, isLoading, hasMoreData]);

  return <div ref={contentRef}>{children}</div>;
};
