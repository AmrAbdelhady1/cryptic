import Services from "../Services/Services";

const HowWorks = () => {
  return (
    <div className="main-container">
      <div className="flex flex-col gap-10 global-width">
        <div className="flex items-center justify-between w-full">
          <p className="text-48">How it works</p>
          <button className="btn-yellow btn-black">Our Solutions</button>
        </div>

        <Services />
      </div>
    </div>
  );
};

export default HowWorks;
