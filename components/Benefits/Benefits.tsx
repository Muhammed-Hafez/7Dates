import Link from "next/link";
import styles from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <section
      className={`${styles.benefits} w-full max-w-[1600px] px-8 py-20 mx-auto flex flex-col items-start justify-start`}
    >
      <h2 className="text-3xl font-bold mb-5">The Health Marvels of Dates</h2>
      <p className="md:w-[45%] w-full text-lg mb-10">
        Dates, sweet fruits from the date palm tree, are more than just a
        delicious treat. Packed with essential nutrients, aiding digestion, and
        providing a natural energy boost, these tiny wonders are a must-have for
        a healthy diet.
      </p>

      <ul className="flex md:flex-row items-center justify-between md:w-[30%] w-full mb-5">
        <li>Rich in Nutrients</li>
        <li>Natural Energy Boost</li>
      </ul>

      <ul className="flex md:flex-row items-center justify-between md:w-[30%] w-full">
        <li>High in Fiber</li>
        <li>Heart Health Support</li>
      </ul>

      <Link href="#" className="bg-primary text-white mt-8 rounded-full">
        Explore More
      </Link>
    </section>
  );
};

export default Benefits;
