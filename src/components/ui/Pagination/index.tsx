import { FC, CSSProperties } from "react";
import { usePagination } from "./hook/usePagination";
import classes from "./styles.module.scss";

export interface PaginationProps {
  totalPages: number;
  /*
   * define el numero de pages items a mostrar en el pagination
   */
  pagesItems?: number;

  defaultPage?: number;
  color?: string;
  onChange: (newPage: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  defaultPage = 1,
  pagesItems = 3,
  color = "#C1285D",
  onChange,
}) => {
  const { currentPage, changePage, itemsRange } = usePagination({
    totalPages,
    defaultPage,
    pagesItems,
    onChange,
  });

  return (
    <div className={classes.container}>
      {itemsRange.map((page) => (
        <span
          key={page}
          onClick={() => changePage(page)}
          className={`
            ${classes["page-item"]} 
            ${page === currentPage ? classes["current-page-item"] : ""}
          `}
          style={{ "--color": color } as CSSProperties}
        >
          {page}
        </span>
      ))}
      {!itemsRange.includes(totalPages - 1) && (
        <>
          ...
          <span
            className={classes["page-item"]}
            onClick={() => changePage(totalPages)}
          >
            {totalPages}
          </span>
        </>
      )}
    </div>
  );
};
