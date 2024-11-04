const Card = ({ gadget }) => {
  const { product_image, price, product_title } = gadget;
  return (
    <div>
      <div className="card bg-base-100 h-[395px] shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={product_image}
            alt="Shoes"
            className="rounded-xl h-[180px] border-2 object-contain w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}$ </p>
          <div className="card-actions">
            <button className="btn text-[#9538E2] rounded-3xl border-2 border-[#9538E2]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
