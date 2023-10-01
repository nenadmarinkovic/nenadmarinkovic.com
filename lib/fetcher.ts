export default async function Fetcher<T>(
  ...args: Parameters<typeof fetch>
): Promise<T> {
  const res = await fetch(...args);
  return res.json();
}
