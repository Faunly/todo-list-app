import c from "./CategoriesList.module.css"

// eslint-disable-next-line react/prop-types
export default function CategoriesList({title, amount, onChangeFilter }) {

    return (
        <li className={c.categoriesItem} onClick={() => {onChangeFilter(title)}}>
            {`${title} (${amount})`}
        </li>
    );
}