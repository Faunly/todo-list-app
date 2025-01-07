import classes from "./CategoriesList.module.css";
import CategoriesItem from "../CategoriesItem/CategoriesItem.jsx";

// eslint-disable-next-line react/prop-types
export default function CategoriesList({isFetching, categories, filter, fetchTasksByCategories}) {
    return (
        !isFetching && (<ul className={classes.categoriesList}>
            <CategoriesItem
                curFilter={filter}
                meta={{title: "Все", filterTitle: "all"}}
                amount={Object.values(categories)[0]}
                onChangeFilter={fetchTasksByCategories}
            />
            <CategoriesItem
                curFilter={filter}
                meta={{title: "В работе", filterTitle: "inWork"}}
                amount={Object.values(categories)[2]}
                onChangeFilter={fetchTasksByCategories}
            />
            <CategoriesItem
                curFilter={filter}
                meta={{title: "Сделано", filterTitle: "completed"}}
                amount={Object.values(categories)[1]}
                onChangeFilter={fetchTasksByCategories}
            />
        </ul>)
    );
}