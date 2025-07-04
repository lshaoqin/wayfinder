'use client';
import { ResourceGalleryItem } from '@/types/resources';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReactPlayer from 'react-player'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { ResourceTypes } from '@/types/resources';

export default function ResourceGallery({ items }: { items: ResourceGalleryItem[] }) {
    const filteredItems = items.filter(item => item.type === ResourceTypes.Photo || (item.type === ResourceTypes.Video && item.url.includes('youtube.com')));
    const processedItems = filteredItems.length > 0 ? filteredItems : [
    {
      type: ResourceTypes.Photo,
      url: 'https://images.unsplash.com/vector-1739203267529-6e1852ec52f5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  ];

  const renderMedia = (item: ResourceGalleryItem) => {
    if (item.type === ResourceTypes.Photo) {
      return (
        <Image
          src={item.url}
          alt="Gallery image"
          className="w-full h-full object-contain"
          loading="lazy"
          width={1000}
          height={1000}
        />
      );
    } else {
      return (
        <div className="w-full h-full">
          <ReactPlayer
            src={item.url}
            width="100%"
            height="100%"
            controls
            style={{ aspectRatio: '16/9' }}
            config={{
              youtube: {
                playerVars: { showinfo: 1, rel: 0 }
              }
            }}
          />
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          className="rounded-lg"
          nested={true}
          grabCursor={true}
          touchMoveStopPropagation={processedItems.length > 1}
          onTouchStart={processedItems.length > 1 ? (_swiper, event) => {
            event.stopPropagation();
          } : undefined}
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
            '--swiper-navigation-size': '20px',
          } as React.CSSProperties}
        >
          {processedItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                {renderMedia(item)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}