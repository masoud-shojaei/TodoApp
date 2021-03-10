import FiltersAction from "./FiltersAction";
import FiltersColor from "./FiltersColor";
import FiltersStatus from "./FiltersStatus";


function FiltersAside() {
  return (
    <li className="todos-filters">
      <aside className="dark-bgc">
        <FiltersAction/>
        <FiltersColor/>
        <FiltersStatus/>
      </aside>
    </li>
  )
}

export default FiltersAside
