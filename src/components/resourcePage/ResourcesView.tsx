"use client";
import { useContext, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Virtual } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import ScrollingTopToolbar from "../navigation/ScrollingTopToolbar";
import { CurrentResourceContext } from "../CurrentResourceProvider";
import ResourcePage from "./ResourcePage";
import ResourcePageBottomToolbar from "./ResourcePageBottomToolbar";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function PageSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  const ctx = useContext(CurrentResourceContext);

  const { filtered, currentIndex, prev, next } = ctx || {};

  // Update swiper when currentIndex changes externally (e.g., from toolbar)
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== currentIndex) {
      swiperRef.current.slideTo(currentIndex);
    }
  }, [currentIndex]);
  
  if (!ctx || ctx.filtered.length === 0) return null;

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.activeIndex;
    if (newIndex < currentIndex) {
      prev();
    } else if (newIndex > currentIndex) {
      next();
    }
  }

  const paginate = (direction: number) => {
    if (!swiperRef.current) return;
    
    if (direction > 0) {
      swiperRef.current.slideNext();
    } else if (direction < 0) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <ScrollingTopToolbar 
        resourceId={currentIndex} 
        numResources={filtered.length} 
        paginate={paginate} 
      />
      
      <div className="w-full min-h-full pt-4 pb-20">
        <Swiper
          modules={[Navigation, Keyboard, Virtual]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          initialSlide={currentIndex}
          virtual={{
            enabled: true,
            addSlidesBefore: 1,
            addSlidesAfter: 1,
          }}
          keyboard={{
            enabled: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="w-full"
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-navigation-size': '24px',
            height: 'auto', // Allow swiper to adjust its height based on content
          } as React.CSSProperties}
          autoHeight={true}
          speed={300}
          touchRatio={1}
          touchAngle={45}
          threshold={10}
          longSwipes={true}
          longSwipesRatio={0.5}
          longSwipesMs={300}
          followFinger={true}
          allowTouchMove={true}
          resistance={true}
          resistanceRatio={0.85}
          onSlideChangeTransitionEnd={() => {
            // Reset scroll position to top after slide change with smooth animation
            if (swiperRef.current && swiperRef.current.el) {
              const activeSlide = swiperRef.current.el.querySelector('.swiper-slide-active');
              if (activeSlide) {
                // Smoothly scroll the active slide to top
                activeSlide.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
                
                // Also smoothly scroll any child elements with overflow
                const scrollableChildren = activeSlide.querySelectorAll('.overflow-auto, .overflow-y-auto');
                scrollableChildren.forEach(element => {
                  if (element) {
                    (element as HTMLElement).scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }
                });
                
                // Force window to smoothly scroll to top as well
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }
            } else {
              // If swiper isn't available, just scroll window to top
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }
          }}
        >
          {filtered.map((resource, index) => (
            <SwiperSlide 
              key={resource.id || index} 
              virtualIndex={index}
              className="overflow-visible" // Change to visible to prevent fixed height
            >
              <div className="w-full pb-4">
                <ResourcePage resource={resource} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ResourcePageBottomToolbar resource={ctx.getCurrentResource()} />
        
        {/* Blinking swipe instruction */}
        <div className="w-full flex justify-center items-center mt-4 mb-2">
          <div className="text-sm text-gray-500 animate-pulse flex items-center gap-2">
            {currentIndex > 0 && <ArrowRightIcon className="w-5 h-5" />}
            Swipe to see next result
            {currentIndex < filtered.length - 1 && <ArrowLeftIcon className="w-5 h-5" />}
          </div>
        </div>
      </div>
    </div>
  );
}