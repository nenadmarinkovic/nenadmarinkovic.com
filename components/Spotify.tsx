import { getNowPlaying } from "../lib/spotify";
import { SpotifyType } from "../lib/types";

export default async function Spotify(_: SpotifyType, res: any) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: SpotifyType) => _artist.name)
    .join(", ");

  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
