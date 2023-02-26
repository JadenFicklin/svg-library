function ColorInputCard({ color, setColor }) {
  return (
    <div
      id="input-card"
      className="relative flex items-center justify-center w-full h-16 mt-3 bg-white rounded-md gray-shadow max-w-[400px] mx-3"
    >
      <div className="w-[150px] h-[60%]  relative">
        <p className="absolute top-[5px] left-0">Color</p>
        <div
          className={` border-2 rounded-md h-full w-[100px] absolute right-0 grid place-content-center`}
          style={{ borderColor: color }}
        >
          <input
            type="text"
            placeholder={color}
            className="w-full h-full pl-1 ml-3 bg-transparent focus:outline-none"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default ColorInputCard;
