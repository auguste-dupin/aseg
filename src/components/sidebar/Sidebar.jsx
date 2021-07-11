import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, People, CreditCard, PersonAdd, Person } from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Administrativo</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Inicio
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Facturacion
                        </li>
                        <li className="sidebarListItem">
                            <People className="sidebarIcon" />
                            Clientes
                        </li>
                        <li className="sidebarListItem">
                            <CreditCard className="sidebarIcon" />
                            Cuentas x Cobrar
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Pagos Recibidos
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Registro</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonAdd className="sidebarIcon" />
                            Nuevo Paciente
                        </li>
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon" />
                            Paciente Registrado
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
