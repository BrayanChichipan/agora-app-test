import { useEffect, useState } from "react";

export interface HookPaginationProps {
  defaultPage?: number;
  totalPages: number;
  pagesItems?: number;
  onChange: (newPage: number) => void;
}

export const usePagination = ({
  defaultPage = 1,
  totalPages,
  pagesItems = 3,
  onChange,
}: HookPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(
    defaultPage > totalPages ? 1 : defaultPage
  );
  const [itemsRange, setItemsRange] = useState<number[]>([]);

  const changePage = (newPage: number) => {
    if (newPage === currentPage) return;

    setCurrentPage(newPage);
    onChange?.(newPage);
  };

  useEffect(() => {
    if (itemsRange.includes(currentPage)) return;

    const initCount =
      currentPage + pagesItems > totalPages
        ? totalPages - pagesItems + 1
        : currentPage;

    let newRange = Array(pagesItems)
      .fill(0)
      .map((_, idx) => idx + initCount);

    newRange = newRange.filter((numPage) => numPage > 0);

    setItemsRange(newRange);
  }, [currentPage, pagesItems, totalPages]);

  return {
    currentPage,
    itemsRange,
    changePage,
  };
};
