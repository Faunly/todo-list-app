import c from "./CategoriesList.module.css"

export default function CategoriesList({title, amount, onChangeFilter }) {

    function handleClick() {
        console.log("handleClick ", title);
        onChangeFilter(title);
    }

    return (
        <li className={c.categoriesItem} onClick={handleClick}>{`${title} (${amount})`}</li>
    );
}