export default function CategoriesList({ title, amount }) {
    return(
        <a href="">
            <li>{`${title} (${amount})`}</li>
        </a>
    );
}