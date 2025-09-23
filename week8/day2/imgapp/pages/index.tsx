import { getImageProps } from "next/image";

const photoJapan = getImageProps({
  src: "/japan.jpg",
  alt: "Japan view",
  width: 1200,
  height: 800,
});

const photoCity = getImageProps({
  src: "/city.jpg",
  alt: "City view",
  width: 1024,
  height: 674,
});

const photoOcean = getImageProps({
  src: "/ocean.jpg",
  alt: "Ocean view",
  width: 768,
  height: 512,
});

export default function Home() {
  return (
    <>
      <div>
        <picture>
          <source srcSet={photoJapan.props.src} media="(max-width: 768px)" />
          <source srcSet={photoCity.props.src} media="(max-width: 1024px)" />
          <img {...photoOcean.props} />
        </picture>
      </div>
    </>
  );
}
