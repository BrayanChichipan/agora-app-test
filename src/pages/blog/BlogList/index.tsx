import { Container } from "@/components/layouts";
import styles from "./blog-list.module.scss";
import { BLOG_TYPES } from "./constants";
import { Button, Chip } from "@/components/ui";
import { useGetAllPotsQuery } from "@/services";
import { Spinner } from "@/components/ui";
import { useSearchParams } from "react-router-dom";
import { QueryParams } from "@/interfaces";
import { useEffect, useState } from "react";

const PAGES = [1, 2, 3];

export const BlogList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState<QueryParams>({ limit: "12" });

  const { data, isFetching } = useGetAllPotsQuery(queryParams);

  useEffect(() => {
    setQueryParams({
      ...queryParams,
      page: searchParams.get("page") || "1",
      type: searchParams.get("type") || "",
    });
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <Container as="main">
        <div className={styles["blog-types"]}>
          {BLOG_TYPES.map((type) => (
            <span
              key={type.label}
              onClick={() => {
                setSearchParams({
                  ...searchParams,
                  page: "1",
                  type: type?.value || "",
                });
              }}
            >
              {type.label}
            </span>
          ))}
        </div>

        <div className={styles["blog-list-container"]}>
          {!isFetching &&
            data?.data.map((post) => (
              <div className={styles["card-container"]} key={post._id}>
                <Chip className={styles.chip}>
                  {BLOG_TYPES.find((type) => type.value == post.type)?.label}
                </Chip>
                <img
                  src={post.images?.[0] || "/images/emprendedora.png"}
                  alt="emprendedora"
                />
                <div className={styles["card-body"]}>
                  <h6 className={styles["card-title"]}>{post.title}</h6>
                  <p className={styles["card-subtitle"]}>{post.subtitle}</p>
                </div>
                <Button>CONOCER MÁS</Button>
              </div>
            ))}
        </div>
        {isFetching && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spinner />
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          {PAGES.map((page) => (
            <span
              onClick={() =>
                setSearchParams({
                  ...searchParams,
                  page: String(page),
                })
              }
              style={{
                color:
                  searchParams.get("page") === String(page)
                    ? "#C1285D"
                    : "#333",
                cursor: "pointer",
              }}
            >
              {page}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
};
