import './App.css'
import NavBar from './components/NavBar/NavBar'
import CardProduct from './components/CardProduct/CardProduct'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
  <div>    
    
      <NavBar/>
    <ItemListContainer/>
      <div className='cardSection'>
        <CardProduct  
        producto = 'Gan 356 Rs'
        descripcion = 'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original' 
        img = 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=138&useDensity=true&width=1903&height=931&tipoEscala=contain'/>
         <CardProduct  
        producto = 'Moyu meilong M 2020'
        descripcion = 'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original' 
        img = 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=828&useDensity=true&width=1903&height=931&tipoEscala=contain'/>
         <CardProduct  
        producto = 'Qiyi new thunderclap'
        descripcion = 'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original' 
        img = 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=378&useDensity=true&width=1903&height=931&tipoEscala=contain'/>
       
      </div>
  </div>
  
    
  )
}

export default App
