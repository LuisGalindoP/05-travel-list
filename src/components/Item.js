function Item(props) {
    const { item } = props;
    return (
        <li>
            <input type="checkbox" />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button> X</button>
        </li>
    );
}

export default Item;
