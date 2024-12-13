import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import join from "../../assets/join.jpg";
import { containerVariants, itemVariants } from "../../utils/motion";

const JoinCommunity = () => {
  const benefits = [
    "Akses eksklusif ke fitur pengembangan terbaru",
    "Kemampuan untuk mengunggah dan berbagi file proyek",
    "Partisipasi dalam diskusi dan forum komunitas",
    "Undangan ke webinar dan workshop eksklusif",
    "Kesempatan untuk berkontribusi pada kode sumber terbuka",
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="container mx-auto max-w-4xl"
      >
        <Card shadow="none" className="space-y-7 overflow-hidden">
          <CardHeader className="flex flex-col gap-3 items-center">
            <motion.h1
              variants={itemVariants}
              className="font-bold text-3xl md:text-4xl text-center text-primary"
            >
              Gabung Komunitas Kami
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-center text-default-700 max-w-lg"
            >
              Dengan dukungan dan partisipasi Anda, kami dapat terus
              meningkatkan dan mengembangkan aplikasi ini menjadi lebih baik
              lagi.
            </motion.p>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div variants={itemVariants} className="flex-1">
                <motion.h3
                  variants={itemVariants}
                  className="text-xl font-semibold mb-4 text-primary"
                >
                  Keunggulan Menjadi Anggota
                </motion.h3>
                <motion.ul variants={containerVariants} className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="text-success" size={20} />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  alt="Community collaboration"
                  className="object-cover rounded-lg shadow-lg"
                  src={join}
                  width={400}
                  height={300}
                />
              </motion.div>
            </div>
          </CardBody>

          <CardFooter className="flex justify-center">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                color="primary"
                size="lg"
                radius="none"
                className="font-bold text-white"
              >
                Bergabung Sekarang
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
};

export default JoinCommunity;
