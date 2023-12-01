export default function CategoryItem({ name, img }) {
  return (
    <div className="category-item col frost">
      <img src={img} />
      <a href="#">{name}</a>
    </div>
  );
}
