import dynamic from "next/dynamic";

const MapDynamic = ({theme}: any) => {
  const Map = dynamic(
    () => import("../components/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return <Map theme={theme} />;
};

export default MapDynamic