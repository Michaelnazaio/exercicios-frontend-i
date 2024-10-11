import './HoraAtual.css';

const HoraAtual = () => {

    const hora = new Date().getHours();

    return (
        <>
            <div className='divHora'>
            <div className='horaAtual'>
                {hora}
            </div>
            </div>
        </>
    )
}

export default HoraAtual;