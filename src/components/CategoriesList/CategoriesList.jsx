import classes from "./CategoriesList.module.css";
import CategoriesItem from "../CategoriesItem/CategoriesItem.jsx";

// eslint-disable-next-line react/prop-types
export default function CategoriesList({ categories, filter, fetchTasksByCategories }) {
    return (
        <ul className={classes.categoriesList}>
            {Object.entries(categories).map(
                (info, id) => <CategoriesItem
                    key={id}
                    curFilter={filter}
                    title={info[0]}
                    amount={info[1]}
                    onChangeFilter={fetchTasksByCategories}
                />
            )}
        </ul>
    );
}