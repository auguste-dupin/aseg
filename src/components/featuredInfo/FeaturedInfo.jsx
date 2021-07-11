import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Proxima Semana</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Comparado a esta semana</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Proximo Mes</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Comparado a este mes</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Despues del Mes</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        +1.4 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Comparado a este mes</span>
            </div>
        </div>
    )
}
