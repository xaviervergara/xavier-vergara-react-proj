import './App.css'
import NavBar from './components/NavBar/NavBar'
import CardWidget from './components/CardWidget/CardWidget'



function App() {
  return (
  <div>    
    <NavBar title='Hola mundo!'/>
    <NavBar title='Hello world!'/>
      <div className='cardSection'>
        <CardWidget  
        producto = 'Gan 356 Rs'
        precio = '$ 29.700'
        description = 'Gan 356 RS es una mejora del excelente 356 R.Tiene un sistema que permite el ajuste con tus propias manos. trae en los centros las ges amarillas que permiten 2 posiciones 0,6 y 0,8 para que lo configures como mas te gusta.' 
        img = 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=138&useDensity=true&width=1903&height=931&tipoEscala=contain'/>
         <CardWidget  
        producto = 'Moyu meilong M 2020'
        precio = '$ 16.000'
        description = 'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original' 
        img = 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=828&useDensity=true&width=1903&height=931&tipoEscala=contain'/>
         <CardWidget  
        producto = 'Qiyi new thunderclap'
        precio = '$ 11.400'
        description = '- STICKERLESS, fondo blanco o fondo negro.Se entrega en su packaging original.' 
        img = 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=378&useDensity=true&width=1903&height=931&tipoEscala=contain'/>
       
      </div>
  </div>
  
    
  )
}

export default App
