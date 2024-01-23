import React from "react";
import { TempWatchedData } from "../../utils/DAO";

function Summary({ watched }: any) {
  const average = (arr: any) =>
    arr.reduce(
      (acc: number, cur: number, i: number, arr: TempWatchedData[]) =>
        acc + cur / arr.length,
      0
    );
  const avgImdbRating = average(
    watched.map((movie: TempWatchedData) => movie.imdbRating)
  );
  const avgUserRating = average(
    watched.map((movie: TempWatchedData) => movie.userRating)
  );
  const avgRuntime = average(
    watched.map((movie: TempWatchedData) => movie.runtime)
  );
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
