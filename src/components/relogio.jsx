export default function Relogio(){
    return(
        <>
            <p>
                Dia atual: {new Date().toDateString()}
            </p>

            <p>
                Hora: {new Date().toLocaleTimeString()}
            </p>
        </>
    )
}