import styles from "./Clients.module.scss";

const clients = [
  {
    id: 1,
    name: "Client 1",
    img: "/images/clients/client-1.webp",
  },
  {
    id: 2,
    name: "Client 2",
    img: "/images/clients/client-2.png",
  },
  {
    id: 3,
    name: "Client 3",
    img: "/images/clients/client-3.png",
  },
  {
    id: 4,
    name: "Client 4",
    img: "/images/clients/client-4.jpeg",
  },
  {
    id: 5,
    name: "Client 5",
    img: "/images/clients/client-5.jpg",
  },
  {
    id: 6,
    name: "Client 6",
    img: "/images/clients/client-6.png",
  },
  {
    id: 7,
    name: "Client 7",
    img: "/images/clients/client-7.jpg",
  },
];

export default function Clients() {
  return (
    <section className="w-full bg-[#377760]">
      <div className={styles.clients__container}>
        <h2 className={styles.clients__title}>Our Clients</h2>

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
