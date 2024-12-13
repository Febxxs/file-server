import { Tooltip } from "@nextui-org/react";
import { HelpCircle } from "lucide-react";
import { motion } from "motion/react";

const HelpButton = () => {
  return (
    <motion.div className="fixed bottom-5 right-5  bg-primary rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] rounded-tr-lg flex justify-center items-center p-3 z-30">
      <Tooltip content="Bantuan" showArrow={true}>
        <HelpCircle size={40} className="text-white" />
      </Tooltip>
    </motion.div>
  );
};

export default HelpButton;
