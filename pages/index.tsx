import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Stripes from "../public/assets/hp-pt-stripes.png";
import Walk from "../public/assets/dleh.png";
import TeaCups from "../public/assets/tea-cups.png";
import DeathCleaningCover from "../public/assets/death-cleaning.png";
import ArtOfAgingCover from "../public/assets/art-of-aging.png";

import Carousel from "react-elastic-carousel";

import { CgChevronRight, CgChevronLeft } from "react-icons/cg";

import { Nav } from "../components/Nav";

const Home: NextPage = () => {
  const redirect = (url: string) => {
    window.open(url, "_blank");
  };

  const renderArrow = (type: any, onClick: () => any) => {
    if (type === "PREV") {
      return (
        <CgChevronLeft
          size={32}
          onClick={onClick}
          className={styles.carousel__arrow}
        />
      );
    } else {
      return (
        <CgChevronRight
          size={32}
          onClick={onClick}
          className={styles.carousel__arrow}
        />
      );
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Margareta Magnusson</title>
        <meta
          name="description"
          content="Home page for the Margareta Magusson website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.home}>
          <Nav />
          <div className={styles.home__content}>
            <div className={styles.home__left}>
              <div className={styles.walk__container}>
                <Image src={Walk} />
              </div>
              <p className={styles.bio}>
                <span className={styles.bioSpanName}> Margareta Magnusson</span>{" "}
                is, in her own words, aged between 80 and 100. Born in Sweden,
                she has lived all over the world. Margareta graduated from
                Beckman’s College of Design and her art has been exhibited in
                galleries from Hong Kong to Singapore. She has five children and
                lives in Stockholm. She is the author of{" "}
                <span className={styles.bioSpanBT1}>
                  The Gentle Art of Swedish Death Cleaning
                </span>{" "}
                and{" "}
                <span className={styles.bioSpanBT2}>
                  The Swedish Art of Aging Exuberantly
                </span>
                .
              </p>
              <div className={styles.home__left__bot__container}>
                <div className={styles.arrow__container}>
                  <div className={styles.styled__arrow} />
                </div>
                <div className={styles.teacups__container}>
                  <Image src={TeaCups} />
                </div>
                <div className={styles.arrow__container}>
                  <div className={styles.styled__arrow} />
                </div>
              </div>
            </div>
            <div className={styles.stripes__container}>
              <Image placeholder="blur" src={Stripes} />
            </div>
          </div>
        </section>

        <section className={styles.books__section}>
          <p className={styles.books__section__title}>Books</p>
          <div className={styles.book__cover__section}>
            <div className={styles.death__cleaning__section}>
              <div className={styles.death__cleaning__bio}>
                <p className={styles.death__cleaning__bio__text}>
                  A charming, practical, and unsentimental approach to putting a
                  home in order while reflecting on the tiny joys that make up a
                  long life.
                </p>
                <div className={styles.death__cleaning__more__button}>
                  Learn More <CgChevronRight />{" "}
                </div>
              </div>
              <div className={styles.book__cover__container}>
                <Image
                  className={styles.book__cover}
                  placeholder="blur"
                  src={DeathCleaningCover}
                  onClick={() =>
                    redirect(
                      "https://www.amazon.com/Gentle-Art-Swedish-Death-Cleaning/dp/1501173243"
                    )
                  }
                />
              </div>
            </div>

            <div className={styles.art__aging__section}>
              <div className={styles.art__aging__bio}>
                <p className={styles.art__aging__bio__text}>
                  A book of humorous and charming advice for embracing life and
                  aging joyfully.
                </p>
                <div
                  className={styles.art__aging__more__button}
                  href="/swedish-death-cleaning"
                >
                  Learn More <CgChevronRight />{" "}
                </div>
              </div>
              <div className={styles.book__cover__container}>
                <Image
                  className={styles.book__cover}
                  placeholder="blur"
                  src={ArtOfAgingCover}
                  onClick={() =>
                    redirect(
                      "https://www.amazon.com/Swedish-Art-Aging-Well-Probably-ebook/dp/B09JPGWC14"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.videos__section}>
          <p className={styles.videos__section__title}>Videos</p>
          <Carousel
            renderArrow={({ type, onClick }) => renderArrow(type, onClick)}
            renderPagination={() => {
              return <div />;
            }}
          >
            <div className={styles.carousel__element__container}>
              <iframe
                width="950"
                height="534"
                src="https://www.youtube.com/embed/yv6fBOZlMgE"
                title="The Gentle Art of Swedish Death Cleaning"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className={styles.carousel__element__container}>
              <iframe
                width="966"
                height="543"
                src="https://www.youtube.com/embed/3XNbAbhQZFA"
                title="I tried Swedish Death Cleaning (and it worked!)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Carousel>
        </section>
      </main>
    </div>
  );
};

export default Home;
