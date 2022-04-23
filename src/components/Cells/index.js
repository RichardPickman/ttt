import styles from './cells.module.css'

const Cell = ({ symbol = null, onClick }) => (
    <div className={styles.cell} onClick={symbol ? () => {} : onClick}>
        {symbol || ''}
    </div>
);

export default Cell;
