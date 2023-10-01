import useSWR from "swr";
import fetcher from "../lib/fetcher";
import React from "react";
import { SpotifyType } from "../lib/types";
import { SpotifyWrap } from "../styles/components/spotify";

function SpotifyPlay() {
  const { data } = useSWR<SpotifyType>("/api/playing", fetcher);

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

export default SpotifyPlay;
