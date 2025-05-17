import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const services = [
  { name: '욕실청소', icon: '/bathroom.png' },
  { name: '주방청소', icon: '/kitchen.png' },
  { name: '냉장고청소', icon: '/fridge.png' },
  { name: '거실청소', icon: '/livingroom.png' },
  { name: '방청소', icon: '/room.png' },
  { name: '현관청소', icon: '/entrance.png' }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>청소대마왕</h1>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.name} className={styles.card}>
            <Image src={service.icon} alt={service.name} width={60} height={60} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}