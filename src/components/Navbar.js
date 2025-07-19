import style from './Navbar.module.css';
function Navbar(){
return(
    <div className={style.header}>
        <h2 >مقالو</h2>
        <ul className={style.list}>
            <li> <a href="">لیست  مقالات</a></li>
            <li><a href="">مقاله جدید</a></li>
            <li> <a href=""> درباره مقالو</a></li>
        </ul>
    </div>
);
}
export default Navbar;
