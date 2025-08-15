import React, { useState, useEffect } from "react";
import { Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap: React.FC = () => {
  const [mapInstance, setMapInstance] = useState<ymaps.Map | null>(null);

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

  // чтоб карта меняла размеры на правильные после загрузки размеров модалки
  useEffect(() => {
    if (mapInstance) {
      mapInstance.container.fitToViewport();
    }
  }, [mapInstance]);

  return (
    <div
      style={{
        marginTop: "16px",
        marginBottom: "16px",
        width: "500px",
        height: "400px",
        maxWidth: "100%",
      }}
    >
      <Map
        defaultState={defaultState}
        width="100%"
        height="100%"
        instanceRef={(map) => setMapInstance(map)} // экземпляр карты для сохранения состояния
      >
        <Placemark geometry={[55.751574, 37.573856]} />
      </Map>
    </div>
  );
};

export default YandexMap;
