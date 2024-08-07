import Box from "./Box";

const Section1 = () => {
  return (
    <div className="px-6 pb-8">
      <div className=" font-semibold text-center w-full text-3xl p-4 pb-5">
        Select the service that you are interested in:
      </div>
      <div className=" w-4/3 flex gap-8 flex-wrap">
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/55fc70fc-f0bc-4364-805c-2da00a80cd5a"
          }
          text={"Soft Wash Home Washing"}
        />
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/55d4fb1e-9510-44c3-b7da-22b80a80cd5a"
          }
          text={"Window Cleaning"}
        />
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/55e8c76e-32f4-4ca0-b4e7-52690a80cd5a"
          }
          text={"Gutter Cleaning"}
        />
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/55fc713f-796c-4770-a8fb-2db60a80cd5a"
          }
          text={"Patio & Sidewalk Cleaning"}
        />
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/55f1e7e3-dba0-4cf7-ba27-12d40a80cd5a"
          }
          text={"Deck Cleaing"}
        />
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/55fe41c7-cc70-4c4a-9b41-704c0a80cd5a"
          }
          text={"Dryer Vent Cleaning"}
        />
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/59a9de08-7094-4bea-beda-7c41ac1e035d"
          }
          text={"Fence Cleaning"}
        />
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/56536a5a-4a0c-4974-aded-5fdc0a80cd5a"
          }
          text={"Holiday Light Installation"}
        />
        <Box
          src={
            "https://s3.amazonaws.com/module-builder/ModuleService/55fc7120-78d8-48ba-b043-2da10a80cd5a"
          }
          text={"Roof Cleaning"}
        />
        <div className="w-[7vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="border-2"
          >
            <path d="M20.0049 13.0028V20.0028C20.0049 20.5551 19.5572 21.0028 19.0049 21.0028H5.00488C4.4526 21.0028 4.00488 20.5551 4.00488 20.0028V13.0028H20.0049ZM14.5049 2.00281C16.4379 2.00281 18.0049 3.56981 18.0049 5.50281C18.0049 6.04001 17.8839 6.54895 17.6676 7.00385L21.0049 7.00281C21.5572 7.00281 22.0049 7.45052 22.0049 8.00281V11.0028C22.0049 11.5551 21.5572 12.0028 21.0049 12.0028H3.00488C2.4526 12.0028 2.00488 11.5551 2.00488 11.0028V8.00281C2.00488 7.45052 2.4526 7.00281 3.00488 7.00281L6.34219 7.00385C6.12591 6.54895 6.00488 6.04001 6.00488 5.50281C6.00488 3.56981 7.57189 2.00281 9.50488 2.00281C10.4849 2.00281 11.3708 2.40557 12.0061 3.05459C12.639 2.40557 13.5249 2.00281 14.5049 2.00281ZM9.50488 4.00281C8.67646 4.00281 8.00488 4.67438 8.00488 5.50281C8.00488 6.2825 8.59977 6.92326 9.36042 6.99594L9.50488 7.00281H11.0049V5.50281C11.0049 4.72311 10.41 4.08236 9.64934 4.00967L9.50488 4.00281ZM14.5049 4.00281L14.3604 4.00967C13.6473 4.07782 13.0799 4.64524 13.0117 5.35835L13.0049 5.50281V7.00281H14.5049L14.6493 6.99594C15.41 6.92326 16.0049 6.2825 16.0049 5.50281C16.0049 4.72311 15.41 4.08236 14.6493 4.00967L14.5049 4.00281Z"></path>
          </svg>
          <p className="text-center">Track Cleaning</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
