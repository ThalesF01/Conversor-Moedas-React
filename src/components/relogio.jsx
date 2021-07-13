export default function Relogio(){
    return(
        <div>
            <p>
                Dia atual: {new Date().toDateString()}
            </p>

            <p>
                Hora: {new Date().toLocaleTimeString()}
            </p>
        </div>
    )
}