import './MinutoAtual.css';

const MinutoAtual = () => {

    const minuto = new Date().getMinutes();

    return (
        <>
            <div className='divMinuto'>

                <div className='minutoAtual'>
                    {minuto}
                </div>

            </div>
        </>
    )
};

export default MinutoAtual;
