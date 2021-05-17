import React, { useCallback, useState } from "react";
import "./pagination.styles.scss";

export default function Pagination({ numOfUsers, numOfRows, setCurrPage}) {
  const [activePage, setActivePage] = useState(1);

  const group = useCallback(() => {
    const arr = [];
    for (let i = 1; i <= Math.ceil(numOfUsers / numOfRows); i++) arr.push(i);
    return arr;
  }, [numOfUsers, numOfRows]);

  const pagesArr = group();

  return (
    <div className="pagination">
      {pagesArr.length > 1 && (
        <div
          className="page__number"
          onClick={() => {
            if (activePage !== 1) {
              setActivePage(activePage - 1);
              setCurrPage(activePage - 1);
            }
          }}
        >
          {" "}
          &lt;{" "}
        </div>
      )}

      {pagesArr.length > 1 &&
        pagesArr.map((number) => (
          <div
            className={`page__number ${activePage === number ? "active" : ""}`}
            key={number}
            onClick={() => {
              setCurrPage(number);
              setActivePage(number);
            }}
          >
            {number}
          </div>
        ))}

      {pagesArr.length > 1 && (
        <div
          className="page__number"
          onClick={() => {
            if (activePage !== pagesArr.length) {
              setActivePage(activePage + 1);
              setCurrPage(activePage + 1);
            }
          }}
        >
          &gt;
        </div>
      )}
    </div>
  );
}
