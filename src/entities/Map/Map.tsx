"use client";

// react
import { memo, useEffect } from "react";

// clsx
import clsx from "clsx";

// leaflet
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// styles
import styles from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks";
import { setOpenMap } from "src/shared/store/reducers";

export default memo(function Map() {
  const openMap = useAppSelector((state) => state.openMap);
  const dispatch = useAppDispatch();

  useEffect(() => {
    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
  }, []);

  return (
    <>
      <div className={clsx(styles.map, openMap ? "" : styles.map_close)}>
        <div className={styles.map__control}>
          <button onClick={() => dispatch(setOpenMap(false))}>prev</button>
        </div>
        <MapContainer
          center={[40.8054, -74.0241]}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
          className={styles.map__maping}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
});
