const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width={200}
        height={200}
      >
        <rect
          fill="#F2F2F2"
          stroke="#F2F2F2"
          stroke-width="15"
          stroke-linejoin="round"
          width="30"
          height="30"
          x="85"
          y="85"
          rx="0"
          ry="0"
        >
          <animate
            attributeName="rx"
            calcMode="spline"
            dur="2"
            values="15;15;5;15;15"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="ry"
            calcMode="spline"
            dur="2"
            values="15;15;10;15;15"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="height"
            calcMode="spline"
            dur="2"
            values="30;30;1;30;30"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            calcMode="spline"
            dur="2"
            values="40;170;40;"
            keySplines=".6 0 1 .4;0 .8 .2 1"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </svg> */}
      <img src="./loading.gif" alt="loading..." />
      <p className="mt-2 text-2xl font-semibold">Please wait...</p>
    </div>
  );
};

export default Loader;
