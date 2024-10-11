import './MesAtual.css'

const MesAtual = () => {

    const mes = new Date().getMonth() +1;
    
        return (
        <>
        <div className='mesAtual'>
            {mes}
        </div>
        </> 
        );
    }



export default MesAtual;