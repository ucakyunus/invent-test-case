"use client";

import * as React from "react";
import { TablePagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

interface MoviesFooterProps {
  totalCount: number;
}

export const MoviesFooter = ({ totalCount }: MoviesFooterProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const page = params.get("page") ?? "0";

  const replace = useCallback((url: string) => router.replace(url), [router]);

  const handleChangePage = useCallback(
    async (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      const page = +newPage + 1;
      params.set("page", page.toString());
      replace(`${pathname}?${params.toString()}`);
    },
    [params, pathname, replace],
  );

  return (
    <TablePagination
      component="div"
      count={totalCount}
      rowsPerPage={10}
      page={Math.max(0, +page - 1)}
      onPageChange={handleChangePage}
      rowsPerPageOptions={[]}
    />
  );
};
