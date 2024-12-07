import c from "./CategoriesList.module.css"

export default function CategoriesList({title, amount, onChangeFilter }) {

    return (
        <li className={c.categoriesItem} onClick={() => {onChangeFilter(title)}}>
            {`${title} (${amount})`}
        </li>
    );
}