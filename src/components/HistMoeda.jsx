import React from 'react'
import '../css/hist.css'

export default function HistMoeda(props) {

    var fonte

    function Hist(){
        if(props.moeda === 'Real'){ 
            fonte = 'https://pt.wikipedia.org/wiki/Real_(moeda_brasileira)'
            return <>
                <div className='img'><h1>{props.moeda}</h1> <img alt='Simbolo'src="https://image.flaticon.com/icons/png/512/38/38213.png"/></div>
                <p>O Real (ISO 4217: BRL, abreviado como R$) é a moeda corrente oficial da 
                    República Federativa do Brasil. Após sucessivas trocas monetárias, o Brasil 
                    adotou o real em 1 de julho de 1994, que, aliado à drástica queda das taxas de 
                    inflação, constituiu uma moeda estável para o país. Foi implantado no mandato do
                    presidente Itamar Franco, sob o comando do então ministro da Fazenda, Fernando 
                    Henrique Cardoso, depois eleito presidente da República. Quando o Real foi 
                    lançado, em 1 de julho, o ministro da Fazenda já era Rubens Ricupero, uma vez 
                    que FHC já tinha saído para desincompatibilizar-se e ter o direito de se 
                    candidatar a Presidente da República.</p>
             </>
        }
        else if(props.moeda === 'Dolar'){
            fonte = 'https://pt.wikipedia.org/wiki/D%C3%B3lar_dos_Estados_Unidos'
            return <>
                <div className='img'><h1>{props.moeda}</h1> <img alt='Simbolo'src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dollar_Sign.svg/1200px-Dollar_Sign.svg.png"/></div>
                <p>O dólar dos Estados Unidos (em inglês: United States dollar), também conhecido como dólar 
                    estadunidense ou dólar americano é a moeda oficial dos Estados Unidos e utilizada no mundo inteiro, 
                    tanto em reservas internacionais, como em livre circulação em alguns países. Atualmente, sua expedição 
                    é controlada pela Reserva Federal dos Estados Unidos.</p>
             </>
        }
        else if(props.moeda === 'Euro'){
            fonte = 'https://pt.wikipedia.org/wiki/Euro'
            return <>
                <div className='img'><h1>{props.moeda}</h1> <img alt='Simbolo'src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Euro_symbol_black.svg/764px-Euro_symbol_black.svg.png"/></div>
                <p>Euro (símbolo: €; código: EUR) é a moeda oficial da zona Euro, a qual é constituída por 19 dos 27 
                    estados-membro da União Europeia: Alemanha, Áustria, Bélgica, Chipre, Eslováquia, Eslovénia, Espanha, 
                    Estónia, Finlândia, França, Grécia, Irlanda, Itália, Letónia, Lituânia, Luxemburgo, Malta, Países Baixos 
                    e Portugal. A moeda é também usada de forma oficial pelas instituições da União Europeia e por 
                    quatro outros países europeus e, de forma unilateral, por outros dois. Em 2018, a moeda era usada 
                    diariamente por cerca de 343 milhões de europeus. A moeda é também usada oficialmente em diversos 
                    territórios ultramarinos da UE.</p>
            </>
        }
        else if(props.moeda === 'Libra'){
            fonte = 'https://pt.wikipedia.org/wiki/Libra_esterlina'
            return <>
            <div className='img'><h1>{props.moeda}</h1> <img alt='Simbolo'src="https://image.flaticon.com/icons/png/512/20/20977.png"/></div>
                <p>A libra esterlina ou simplesmente libra (em inglês, pound, plural pounds, informal. Pound Sterling, 
                    ou pounds sterling, formal) é a moeda oficial do Reino Unido. Desde 15 de Fevereiro de 1971 e da 
                    adoção do sistema decimal, ela é dividida em 100 pence (singular: penny). Antes dessa data, uma libra 
                    esterlina valia 20 shillings (que valiam por sua vez 12 pence cada um), ou 240 pence. A palavra libra (pound) 
                    era um termo utilizado pelas unidades monetárias de várias regiões da Europa. A palavra deriva do baixo latim libra 
                    (século X). Originalmente, esse valor correspondia a uma libra de prata.</p>
            </>
        }
    }

    return(
            <div className="HistMoeda">
                {Hist()}

                <div className="fonte">
                    <p>Fonte:<a href={fonte} rel="noreferrer" target="_blank">Wikipedia</a></p>
                </div>
            </div>
    )
}