import Styles from "./Sidebar.module.css";
function Sidebar() {

    const links=[
{icons:"fa-chart-column", title:"status"},
{icons:"fa-users", title:"Users management"},
{icons:"fa-building", title:"Projects management"},
{icons:"fa-building", title:"Developers management"},
{icons:"fa-globe", title:"Cms"},
{icons:"fa-message", title:"Live chat"}
    ]
  return (
    <aside className={`${Styles.Sidebar} min-vh-100 py-4`}>
     <div className="fw-semibold px-3 mb-4 fs-4">Dashboard</div>
     <nav>
        {links.map((item)=>(
        <div className={`${Styles.navItem} d-flex align-items-center gap-2 px-3 py-4`}>
        <i class={`fa-solid ${item.icons} fs-3`}></i>
        <span className={Styles.title}>{item.title}</span>
        </div>
        ))}        
     </nav>
    </aside>
  );
}

export default Sidebar;
