export default function CarouselItem({ item, img, width }) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" src={img} />
      <div className="carousel-text">{item}</div>
    </div>
  );
}
