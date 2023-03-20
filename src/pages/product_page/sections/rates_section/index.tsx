import React, { useState } from 'react';
import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ReviewSlide from '@/components/reviewSlide';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import profilePic from '../../../../media/images/profilePic.jpg';
// import required modules
import { Navigation, Controller } from 'swiper';

const Rates = () => {
  const [firstSwiper, setFirstSwiper] = useState<any>({});
  const [secondSwiper, setSecondSwiper] = useState<any>({});

  return (
    <section id={styles.ratesSection} className={'ratesSection'}>
      <h2 className="h2" id={styles.title}>
        יש סיבה להאמין
      </h2>
      <Swiper
        modules={[Controller, Navigation]}
        onSwiper={swiper => (swiper != undefined ? setFirstSwiper(swiper) : console.log(swiper))}
        controller={{ control: secondSwiper }}
        slidesPerView={'auto'}
        initialSlide={3}
        centeredSlides={true}
        loop={false}
        className={'imagesSwiper'}>
        <SwiperSlide>
          <Image src={profilePic} alt="review profile picture" />
          <p className="imagesSwiperName">Joji mamka</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={profilePic} alt="review profile picture" />
          <p className="imagesSwiperName">Vladimir sukin</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={profilePic} alt="review profile picture" />
          <p className="imagesSwiperName">Ubivator228</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={profilePic} alt="review profile picture" />
          <p className="imagesSwiperName">mama mio eh</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={profilePic} alt="review profile picture" />
          <p className="imagesSwiperName">lopremka</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={profilePic} alt="review profile picture" />
          <p className="imagesSwiperName">Joe BAIDEN</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={profilePic} alt="review profile picture" />
          <p className="imagesSwiperName">Wake Up</p>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev" onClick={() => secondSwiper.slideNext()} />
      <div className="swiper-button-next" onClick={() => secondSwiper.slidePrev()} />
      <Swiper
        modules={[Controller, Navigation]}
        onSwiper={swiper => (swiper != undefined ? setSecondSwiper(swiper) : console.log(swiper))}
        controller={{ control: firstSwiper }}
        centeredSlides={true}
        slidesPerView={1}
        loop={false}
        spaceBetween={0}
        navigation={{ nextEl: '.review-swiper-button-next', prevEl: '.review-swiper-button-prev' }}
        className={`${styles.mySwiper} productSwiper`}>
        <SwiperSlide>
          <ReviewSlide
            stars={1}
            text={
              'Consectetur aute reprehenderit cillum sunt ipsum adipisicing proident nulla et magna et. Nostrud nostrud anim irure cupidatat cupidatat. Mollit anim nisi quis proident ad. Fugiat et reprehenderit labore non veniam eu mollit quis. Eiusmod cillum mollit sit cupidatat. Minim ad ea magna excepteur adipisicing excepteur sint ipsum laboris.'
            }
            date={'21.02.20'}
            images={[]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            stars={2}
            text={
              'Laboris deserunt pariatur ipsum ut laboris cillum Lorem. Cupidatat amet et et qui tempor deserunt quis minim eu excepteur. Officia non pariatur consequat laboris do consectetur nisi ad quis eiusmod. Voluptate proident ut culpa exercitation consequat cupidatat anim dolor anim anim commodo magna ipsum. Irure nostrud nostrud qui nostrud reprehenderit nulla adipisicing magna tempor in ipsum nulla. Aliqua nulla veniam in voluptate proident excepteur Lorem id occaecat. Ullamco dolor pariatur esse non aliqua ea ex labore cupidatat sit.'
            }
            date={'21.02.20'}
            images={[]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            stars={3}
            text={
              'Veniam aliqua ad id exercitation labore commodo. Proident aute sit ex officia sint ullamco in. Exercitation minim sunt ut ex proident. Ut id sit nostrud deserunt elit.'
            }
            date={'21.02.20'}
            images={[]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            stars={4}
            text={
              'Velit non sunt sit non cupidatat ex. Culpa ea voluptate proident est laborum. Et veniam nisi pariatur sunt sit occaecat adipisicing. Velit exercitation officia esse officia ea enim consequat proident aute. Fugiat nisi enim pariatur veniam cupidatat non cupidatat laboris eu et tempor. Et nulla et sit cillum.'
            }
            date={'21.02.20'}
            images={[]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            stars={5}
            text={
              'Sunt laboris in in Lorem cillum elit aute nisi occaecat qui est culpa. Deserunt ut nostrud quis officia esse ad qui. Consectetur magna incididunt culpa occaecat consectetur duis. Cupidatat aute est tempor eiusmod tempor deserunt incididunt labore labore. Ut culpa elit sit sint. Proident enim reprehenderit id commodo ex commodo exercitation.'
            }
            date={'21.02.20'}
            images={[]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            stars={4}
            text={
              'Sint in amet enim tempor. Aliqua amet do qui qui ullamco voluptate laborum ullamco magna et. Consectetur fugiat dolor proident Lorem esse cillum. Dolor esse cupidatat amet elit ad id. Adipisicing Lorem veniam officia fugiat aliqua ex id minim irure dolor dolor incididunt nostrud laborum. Consequat anim anim dolore esse minim irure do anim ea sint.'
            }
            date={'21.02.20'}
            images={[]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            stars={5}
            text={
              'Quis aliqua sit proident voluptate ut commodo irure sit in exercitation adipisicing et. Ipsum adipisicing occaecat sint cillum sit incididunt ut consequat reprehenderit qui. Et consequat dolor ipsum qui incididunt enim ipsum ea. Id quis irure irure sit tempor nulla deserunt deserunt exercitation tempor esse eu.'
            }
            date={'21.02.20'}
            images={[]}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Rates;
