import React from "react";
import { Button } from "@chakra-ui/react";

function Pagination({ pageChangeHandle, currentPage, totalPages }) {
  const prev = (
    <>
      <button
        background={"none"}
        border="none"
        width="0px"
        height={"30px"}
        disabled={currentPage === 1}
        onClick={() => pageChangeHandle(-1)}
      >
        ←
      </button>
    </>
  );
  const current = (
    <>
      <Button
        width="20px"
        height={"30px"}
        border="none"
        background={"none"}
        fontWeight="bold"
      >
        {currentPage}
      </Button>
    </>
  );
  const next = (
    <>
      <button
        width="0px"
        height={"30px"}
        border="none"
        background={"none"}
        disabled={currentPage === totalPages}
        onClick={() => pageChangeHandle(1)}
      >
        →
      </button>
    </>
  );
  return (
    <>
      {prev}
      <span>{current}</span>
      {next}
    </>
  );
}

export default Pagination;
