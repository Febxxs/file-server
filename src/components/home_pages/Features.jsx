import { Card, CardBody } from "@nextui-org/react";
import featuresData from "../../utils/features";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section className="py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-extrabold mb-12"
      >
        Fitur
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {featuresData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full">
              <CardBody className="text-center flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="mb-8"
                >
                  <item.icon className={`${item.colorIcon}`} size={60} />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-xl font-bold mb-4"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {item.description}
                </motion.p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
