import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Spinner} />
      <h2 className={styles.title}>Carregando...</h2>
    </div>
  );
};

export default Loading;