
const Cell = ({ symbol = null, onClick }) => (
    <div className={styles.root} onClick={symbol ? () => {} : onClick}>
        {symbol || '-'}
    </div>
);

export default Cell;