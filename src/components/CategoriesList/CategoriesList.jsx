import classes from "./CategoriesList.module.css"

// eslint-disable-next-line react/prop-types
export default function CategoriesList({ title, amount, onChangeFilter }) {

    return (
        <li className={classes.categoriesItem} onClick={() => {onChangeFilter(title)}}>
            {`${title} (${amount})`}
        </li>
    );
}