
function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && valor !== '.' && valor !== '=';
    };
    
    return (
        <div 
            className={`boton-contenedor ${esOperador(props.childre) ? 'operador' : null}`}>
            {props.chidren}
        </div>
    );
}

export default Boton;