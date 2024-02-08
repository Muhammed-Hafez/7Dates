"use client";

import { useParams } from "next/navigation";

import { useI18n } from "../../utils/translate";

import styles from "./Clients.module.scss";

const clients = [
  {
    id: 1,
    name: "Client 1",
    img: "/images/clients/1.png",
  },
  {
    id: 2,
    name: "Client 2",
    img: "/images/clients/2.png",
  },
  {
    id: 3,
    name: "Client 3",
    img: "/images/clients/3.png",
  },
  {
    id: 4,
    name: "Client 4",
    img: "/images/clients/4.png",
  },
  {
    id: 5,
    name: "Client 5",
    img: "/images/clients/5.png",
  },
  {
    id: 6,
    name: "Client 6",
    img: "/images/clients/6.png",
  },
  {
    id: 7,
    name: "Client 7",
    img: "/images/clients/7.png",
  },
];

export default function Clients() {
  const { t } = useI18n();
  const { locale } = useParams();

  return (
    <section className="w-full">
      <div className={styles.clients__container}>
        <h2 className={styles.clients__title}>{t("Our Clients")}</h2>

        <ul className={styles.clients__list}>
          {clients.map((client) => (
            <li key={client.id} className={styles.clients__item}>
              <img
                src={client.img}
                alt={client.name}
                className={styles.clients__img}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
