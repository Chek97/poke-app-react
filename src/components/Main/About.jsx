import { aboutImage } from '../../assets';

export const About = () => {
  return (
    <div className='container'>
        <header>
            <h1>Sobre La Aplicacion</h1>
        </header>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, 
                facere itaque harum illum ducimus minus eum, nostrum assumenda 
                autem iure odit consequuntur odio accusamus quae vel eligendi? Iste, minima quidem.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, 
                facere itaque harum illum ducimus minus eum, nostrum assumenda 
                autem iure odit consequuntur odio accusamus quae vel eligendi? Iste, minima quidem.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, 
                facere itaque harum illum ducimus minus eum, nostrum assumenda 
                autem iure odit consequuntur odio accusamus quae vel eligendi? Iste, minima quidem.
            </p>
        </div>
        <div className='img'>
            <img src={aboutImage} alt="" srcset="" />
        </div>
    </div>
  )
}
