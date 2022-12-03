import styles from './Container.module.css';

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div> // A ${styles[props.customClass]} é utilizada para puxar o css quando houver.
  );
}

export default Container;
