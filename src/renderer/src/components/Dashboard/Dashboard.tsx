import FadeIn from "../Animations/FadeIn";
import FlashButton from "../FlasButton/FlashButton";
import Devices from "../Devices/Devices";
import { boxShadow } from "@/constants/css";
import { layouLevel } from "@/constants/layout";
import { borderRadius } from "@/constants/css";

const Dashboard = () => {
  return (
    <FadeIn>
      <Devices />
      <div
        className="flex-0 flex flex-row w-[50%] self-center m-10 px-8 py-8 bg-secondary justify-center items-center"
        style={{
          boxShadow,
          zIndex: layouLevel.default,
          borderRadius,
        }}
      >
        <FlashButton />
      </div>
    </FadeIn>
  );
};

export default Dashboard;