import { Button } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import homeImage from "../../assets/homeImage.svg";
import { slideinFromLeft, slideinFromRight } from "../../utils/motion";

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 min-h-screen items-center justify-center p-8"
    >
      <div className="space-y-4 pr-12">
        <motion.h1
          variants={slideinFromLeft(0.5)}
          className="font-bold text-3xl"
        >
          Unduh file yang kamu butuhkan untuk menunjang pembelajaran
        </motion.h1>
        <motion.p variants={slideinFromLeft(0.6)}>
          file yang disiapkan sesuai materi
        </motion.p>
        <motion.div variants={slideinFromLeft(0.7)}>
          <Button
            startContent={<ArrowUpRight className="rotate-90 text-white" />}
            radius="none"
            color="primary"
            size="lg"
            className="font-bold text-white"
          >
            Download
          </Button>
        </motion.div>
      </div>
      <motion.div
        variants={slideinFromRight(0.5)}
        className="w-80 h-80 lg:w-[500px] lg:h-[500px] mt-12 sm:mt-0 "
      >
        <img
          src={homeImage}
          className=" w-full drop-shadow-2xl shadow-blue-400"
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
