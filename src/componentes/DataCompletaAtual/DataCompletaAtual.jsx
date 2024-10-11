import AnoAtual from '../AnoAtual/AnoAtual';
import DiaAtual from '../DiaAtual/DiaAtual';
import HoraAtual from '../HoraAtual/HoraAtual';
import MesAtual from '../MesAtual/MesAtual';
import MinutoAtual from '../MinutoAtual/MinutoAtual';
import './DataCompletaAtual.css';



const DataCompletaAtual = () => {
    
    return (
        <>
            <div className='dataCompletaAtual'>
                <DiaAtual />
                /
                <MesAtual />
                /
                <AnoAtual />
                -
                <HoraAtual />
                :
                <MinutoAtual />
            </div>
        </>
    )

}

export default DataCompletaAtual;
