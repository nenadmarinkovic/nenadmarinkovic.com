import { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../lib/spotify";
import { SpotifyDataType, SpotifySongType, ErrorResponse } from "../../lib/types"; // Import your types

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifySongType | ErrorResponse>
) {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false, artist: "", title: "", songUrl: "" });
    }

    const song: SpotifyDataType = await response.json();

    if (song.item === null) {
      return res.status(200).json({ isPlaying: false, artist: "", title: "", songUrl: "" });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map(_artist => _artist.name).join(", ");
    const songUrl = song.item.external_urls.spotify;

    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30");

    const spotifyData: SpotifySongType = {
      isPlaying,
      title,
      artist,
      songUrl
    };

    return res.status(200).json(spotifyData);
  } catch (error) {
    console.error("Error in API route:", error);
    const errorResponse: ErrorResponse = { error: "Internal Server Error" };
    return res.status(500).json(errorResponse);
  }
}
