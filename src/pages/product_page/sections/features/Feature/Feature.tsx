import styles from './Feature.module.scss';
import Image from 'next/image';

interface FeatureProps {
  title: string;
  image: string;
  text: string;
  index: number;
}

function Feature(props: FeatureProps) {
  const { title, image, text, index } = props;

  return (
    <div className={styles.feature}>
      <Image src={image} alt={'feature-image'} />
      <h3>{title}</h3>
      <p>{text}</p>
      <h1 className={styles.number}>{index}</h1>
    </div>
  );
}

export default Feature;
