import classes from "./CategoriesList.module.css"

// eslint-disable-next-line react/prop-types
export default function CategoriesList({ curFilter, title, amount, onChangeFilter }) {

    return (
        <li className={`${classes.categoriesItem} ${curFilter === title && classes.selected}`} onClick={() => {onChangeFilter(title)}}>
            {`${title} (${amount})`}
        </li>
    );
}