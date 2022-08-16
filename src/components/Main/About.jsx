import { aboutImage } from '../../assets';

export const About = () => {
  return (
    <div className='background'>
        <div className='row container'>
            <header className='col-12 p-3'>
                <h1 className='font-weight-bold'>Sobre La Aplicacion</h1>
            </header>
            <div className='col-12'>
                <p className='text-about'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, 
                    facere itaque harum illum ducimus minus eum, nostrum assumenda 
                    autem iure odit consequuntur odio accusamus quae vel eligendi? Iste, minima quidem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, <br /> 
                    facere itaque harum illum ducimus minus eum, nostrum assumenda 
                    autem iure odit consequuntur odio accusamus quae vel eligendi? Iste, minima quidem.
                </p>
                <p className='text-about'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, 
                    facere itaque harum illum ducimus minus eum, nostrum assumenda 
                    autem iure odit consequuntur odio accusamus quae vel eligendi? Iste, minima quidem.
                </p>
            </div>
            <div className='col-12'>
                <img 
                    src={aboutImage} 
                    alt=""
                    className='img img-fluid rounded-circle'
                />
            </div>
        </div>
    </div>
  )
}
