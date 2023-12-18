import useTrans from '@/src/shared/hooks/useTrans';
import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react';

const MapsContact = () => {
  const { trans } = useTrans();
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEYS as string,
        version: 'weekly',
      });
      const { Map } = await loader.importLibrary('maps');
      const { Marker } = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary;
      const position = {
        lat: 20.9972262,
        lng: 105.8650064,
      };
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'SEN_BACH_DIEP',
      };
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const marker = new Marker({
        map: map,
        position: position,
      });
    };
    initMap();
  }, []);
  if (mapRef === null) return <></>;
  return (
    <section id='MapsContact' className='w-screen px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24'>
      <h1 className='mt-5 font-bold text-2xl mb-3 border-b border-b-[#555]'>{trans.common.home}</h1>
      <p className='font-bold text-md mb-3'>{trans.common.phone_number}: {trans.common.business_info.phone_number}</p>
      <p className='font-bold text-md mb-3'>Email: {trans.common.business_info.email}</p>
      <p className='font-bold text-md mb-3'>{trans.common.address}: {trans.common.business_info.address}</p>
      <div className='min-h-[550px]' ref={mapRef}></div>
    </section>
  );
};

export default MapsContact;
