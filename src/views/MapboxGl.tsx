import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY2hhbmhlbmdob25nIiwiYSI6ImNsN3BtZ2ZjcTA2bGIzd21ia3ZqOG5lcW8ifQ.b-x0f6TY2alN7I6WP8K0Qw",
});

const Mapbox = () => {
  // const optCenter: any = [104.9038566, 11.5774552];
  // const optZoom = 13;
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
};
export default Mapbox;
