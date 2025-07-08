const Shimmer = () => {
    return (
      <div className=" flex justify-between items-end min-h-[20rem] px-4 relative overflow-hidden mt-5">
        <div className="flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQ1o4u8Jmdm5_our40ZHWGoUAJ0dx0zmG-A&s"
          className="h-80 animate-kick-player absolute bottom-0 left-5"
          alt="footballer"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxsghhkyveryXz4PSgRC-bXx824H9X45GCg&s"
          className="h-12 w-12 animate-kick-ball absolute bottom-10 left-24 opacity-0 rounded-full"
          alt="ball"
        />
        </div>
        <img
          className="h-80 w-80 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHVH9gRw3Am1yZobci8HIHBgWSot_TpMVTQ&s"
          alt="goalpost"
        />
      </div>
    );
  };
  
  export default Shimmer;