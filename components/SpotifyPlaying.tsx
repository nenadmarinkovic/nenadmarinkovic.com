import React, { useEffect, useState } from "react";
import { SpotifySongType } from "../lib/types";
import { SpotifyWrap } from "../styles/components/spotify";

export default function SpotifyPlay() {
  const [data, setData] = useState<SpotifySongType | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/playing");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <SpotifyWrap>
      {data?.isPlaying ? (
        <>
          <a
            href={`${data.songUrl}`}
            target="_blank"
            rel="noreferrer"
            className="spotify-link"
          >
            Playing: {data.artist} - {data.title}
          </a>
          <div className="box">
            <div className="music one"></div>
            <div className="music two"></div>
            <div className="music three"></div>
          </div>
        </>
      ) : (
        "Not playing currently"
      )}
    </SpotifyWrap>
  );
}
