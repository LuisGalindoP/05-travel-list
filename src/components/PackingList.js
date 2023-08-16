import Item from "./Item";

function PackingList(props) {
    const { itemsList } = props;

    return (
        <div>
            <ul>
                {itemsList.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default PackingList;
