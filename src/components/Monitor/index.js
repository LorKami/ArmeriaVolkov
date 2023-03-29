import React from 'react'

import '../Monitor/Monitor.css'

import Mauser from '../../images/Armas/Pistolas/mauser.png'
import Volcanic from '../../images/Armas/Pistolas/volcanic.png'
import M1899 from '../../images/Armas/Pistolas/volcanic.png'

import Schofield from '../../images/Armas/Revolveres/schofield.png'
import DobleAccion from '../../images/Armas/Revolveres/dobleaccion.png'
import Cattleman from '../../images/Armas/Revolveres/cattleman.png'
import Navy from '../../images/Armas/Revolveres/navy.png'
import Lemat from '../../images/Armas/Revolveres/lemat.png'
import Autoblocante from '../../images/Armas/Revolveres/lemat.png'

import Bombeo from '../../images/Armas/Escopetas/bombeo.png'
import CañonDoble from '../../images/Armas/Escopetas/cañondoble.png'
import Recortada from '../../images/Armas/Escopetas/recortada.png'
import Repeticion from '../../images/Armas/Escopetas/repeticion.png'
import Semiautomatica from '../../images/Armas/Escopetas/semiautomatica.png'

import carabina from '../../images/Armas/Repetidoras/carabina.png'
import evans from '../../images/Armas/Repetidoras/evans.png'
import lancaster from '../../images/Armas/Repetidoras/lancaster.png'
import litchfield from '../../images/Armas/Repetidoras/litchfield.png'

import cerrojo from '../../images/Armas/Rifles/cerrojo.png'
import springfield from '../../images/Armas/Rifles/springfield.png'
import varmint from '../../images/Armas/Rifles/varmint.png'

import aceite from '../../images/Armas/OtrosMunicion/aceite.png'
import flechas from '../../images/Armas/OtrosMunicion/flechas.png'
import munescopeta from '../../images/Armas/OtrosMunicion/munescopeta.png'
import munpist from '../../images/Armas/OtrosMunicion/munpist.png'
import munrepeticion from '../../images/Armas/OtrosMunicion/munrepeticion.png'
import munrevolver from '../../images/Armas/OtrosMunicion/munrevolver.png'
import munrifle from '../../images/Armas/OtrosMunicion/munrifle.png'


import oyetu from '../../images/Armas/oyetu.png'
import jaja from '../../images/Armas/jaja.png'
import spam1 from '../../images/Armas/spam1.png'


const Monitor = () => {
  return (
    <div>
      <div className='Monitor'>
        
{/* ============================== PISTOLAS =============================== */}

    <div className='PistolSection'>
      <h2>PISTOLAS</h2>
      <div className='WeaponSection'>

        <div className='Pistols'>
          <h2>Mauser</h2>
          <div className='WeaponImage'>
          <img src={Mauser} />
          </div>
          <p>LA MEJOR PISTOLA "AUTOMÁTICA" Y AUTOCARGABLE. Tiene el más elegante de los diseños,</p>
          <h3>Precio........................ <span>$ 48.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Volcanic</h2>
          <div className='WeaponImage'>
          <img src={Volcanic} />
          </div>
          <p>Esta pistola es la mejor creación de Hutton & Baird, y viene directamente del almacén de nuestra armeria.</p>
          <h3>Precio........................ <span>$ 49.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>M1899</h2>
          <div className='WeaponImage'>
          <img src={M1899} />
          </div>
          <p>PENDIENTE</p>
          <h3>Precio........................ <span>$ 70.00</span></h3>
        </div>

      </div>
    </div>

    {/* ============================== PISTOLAS =============================== */}
    {/* ============================== REVOLVERES =============================== */}

    <div className='PistolSection'>
      <h2>REVOLVERES</h2>
      <div className='WeaponSection'>

        <div className='Pistols'>
          <h2>Schofield</h2>
          <div className='WeaponImage'>
          <img src={Schofield} />
          </div>
          <p>Todos los hombres prefieren un revólver o un complemento que sea DE PRIMERA CLASE EN TODOS LOS SENTIDOS.</p>
          <h3>Precio........................ <span>$ 36.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Doble Acción</h2>
          <div className='WeaponImage'>
          <img src={DobleAccion} />
          </div>
          <p>No encontrará un arma con un diseño más actual y más atractivo que el del revólver de doble acción de D. D. Packenbush.</p>
          <h3>Precio........................ <span>$ 48.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Cattleman</h2>
          <div className='WeaponImage'>
          <img src={Cattleman} />
          </div>
          <p>No podrá llevar consigo un revólver mejor cuando se dirija al Oeste, la tierra de la leche y de la miel. Gatille el arma una vez tras otra y verá lo rápido que dispara este revólver, para la desagradable sorpresa del resto.</p>
          <h3>Precio........................ <span>$ 58.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Navy</h2>
          <div className='WeaponImage'>
          <img src={Navy} />
          </div>
          <p>Este revólver de acción simple de calibre 36 es capaz de lanzar una bala de plomo caliente a la asombrosa velocidad de 300 metros por segundo y no existe mamífero ni fiscal más veloz. Adelante, intente desmentir esta afirmación.</p>
          <h3>Precio........................ <span>$ 59.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>LeMat</h2>
          <div className='WeaponImage'>
          <img src={Lemat} />
          </div>
          <p>Este peculiar revólver, con su segundo cañón para perdigones, ofrece una manufactura tan robusta y perfecta que todavía no hemos encontrado ninguno con el más mínimo fallo. El revólver LeMat es un ganador a distancias cortas.</p>
          <h3>Precio........................ <span>$ 69.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Autoblocante</h2>
          <div className='WeaponImage'>
          <img src={Autoblocante} />
          </div>
          <p>PENDIENTE</p>
          <h3>Precio........................ <span>$ 70.00</span></h3>
        </div>

      </div>
    </div>

        {/* ============================== REVOLVERES =============================== */}
        {/* ============================== ESCOPETAS =============================== */}
        <div className='PistolSection'>
      <h2>ESCOPETAS</h2>
      <div className='WeaponSection'>

        <div className='Pistols'>
          <h2>Cañon doble</h2>
          <div className='WeaponImage'>
          <img src={CañonDoble} />
          </div>
          <p>Una de las mejores armas de fuego disponibles actualmente. Cuando vaya en grupo por las montañas, llanuras y pasos de este gran país, solo hay una cosa que garantizará su seguridad, y es la escopeta de cañón doble de D. D. Packenbush.</p>
          <h3>Precio........................ <span>$ 95.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Recortada</h2>
          <div className='WeaponImage'>
          <img src={Recortada} />
          </div>
          <p>Una escopeta fácil de usar y ocultarse, como lo requieren muchas situaciones en la modernidad. La seguridad, durabilidad y, sobre todo, penetración superior de esta arma de calidad no pueden ser igualadas.</p>
          <h3>Precio........................ <span>$ 125.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>De Bombeo</h2>
          <div className='WeaponImage'>
          <img src={Bombeo} />
          </div>
          <p>Para los que solo dicen insensateces cerrarán rápido la boca en cuanto escuchen cómo la escopeta de bombeo de Lancaster carga un cartucho en la cámara. Creemos que el diseño de Lancaster hace que esta sea la mejor escopeta de bombeo que hay en la actualidad en el mercado.</p>
          <h3>Precio........................ <span>$ 140.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>De Repetición</h2>
          <div className='WeaponImage'>
          <img src={Repeticion} />
          </div>
          <p>Esta escopeta Lancaster de repetición es célebre en toda la nación por ser el arma más potente del mercado. Apenas notará que la está empuñando hasta que dispare, y cuando lo haga, le juramos por Dios Todopoderoso que comenzará a rezarle a Lancaster al terminar sus plegarias habituales.</p>
          <h3>Precio........................ <span>$ 155.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Semi Automatica</h2>
          <div className='WeaponImage'>
          <img src={Semiautomatica} />
          </div>
          <p>La escopeta semiautomática de Brun et Fabre es la escopeta de repetición más perfecta y de mejor calidad y precio que se haya creado en el mundo. Una de las armas de fuego más atractivas en el mercado.</p>
          <h3>Precio........................ <span>$ 170.00</span></h3>
        </div>

        <div className='Pistols'>
          <div className='WeaponImage'>
          <img src={oyetu} />
          </div>
        </div>

      </div>
    </div>

        {/* ============================== ESCOPETAS =============================== */}
        {/* ============================== REPETIDORAS =============================== */}
        <div className='PistolSection'>
      <h2>REPETIDORAS</h2>
      <div className='WeaponSection'>

        <div className='Pistols'>
          <h2>Evans</h2>
          <div className='WeaponImage'>
          <img src={evans} />
          </div>
          <p>El nuevo y mejorado Evans de repetición es el mejor rifle de repetición que ha fabricado B. D. & Co. Es de conocimiento público que esta arma de fuego con elegante acabado no requiere de muchas aptitudes académicas: solo tiene que gritar el sobrenombre de alguien, apretar el gatillo y repetir.</p>
          <h3>Precio........................ <span>$ 95.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Lancaster</h2>
          <div className='WeaponImage'>
          <img src={lancaster} />
          </div>
          <p>El arma que ganó tanto el Oeste como el Sur de los inútiles. Hemos recibido cartas de miles de compradores que dicen que la excelente potencia de fuego del Lancaster es satisfactoria en todos los sentidos.</p>
          <h3>Precio........................ <span>$ 125.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Carabina</h2>
          <div className='WeaponImage'>
          <img src={carabina} />
          </div>
          <p>Pocas cosas hay en el mundo más fiables, a excepción de un leal caballo o un buen perro. Sin embargo, lo más probable es que estos últimos mueran, cosa que no hará un arma bien fabricada.</p>
          <h3>Precio........................ <span>$ 140.00</span></h3>
        </div>

        <div className='Pistols'>
          <div className='WeaponImage'>
          <img src={jaja} />
          </div>
        </div>

        <div className='Pistols'>
          <h2>Litchfield</h2>
          <div className='WeaponImage'>
          <img src={litchfield} />
          </div>
          <p>Imagine un rifle que pueda pasar horas limpiando cuidadosamente junto al fuego un domingo por la tarde, para luego cargarlo con cartuchos y disparar toda la semana sin tener que recargar. Al no tener esta clase de preocupaciones, uno puede centrarse en tareas más importantes, como entender el significado del universo.</p>
          <h3>Precio........................ <span>$ 155.00</span></h3>
        </div>

      </div>
    </div>
        {/* ============================== REPETIDORAS =============================== */}
        {/* ============================== RIFLES =============================== */}
        <div className='PistolSection'>
      <h2>RIFLES</h2>
      <div className='WeaponSection'>

        <div className='Pistols'>
          <h2>Varmint (Caza)</h2>
          <div className='WeaponImage'>
          <img src={varmint} />
          </div>
          <p>Le garantizamos al 100% que es el rifle de este tipo mejor fabricado que hay en el mercado. Dispárelo una vez y verá que derriba a las alimañas con un golpetazo inigualado por otros rifles de bajo calibre.</p>
          <h3>Precio........................ <span>$ 150.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Cerrojo</h2>
          <div className='WeaponImage'>
          <img src={cerrojo} />
          </div>
          <p>Mire hacia el objetivo a través de la mira. Sienta el contacto con la culata. Amigo, no hay mejor rifle de cerrojo en otra tienda o empresa que en B. D. & Co. Tenga por seguro que llenará al enemigo de plomo y pánico por igual.</p>
          <h3>Precio........................ <span>$ 215.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Springfield</h2>
          <div className='WeaponImage'>
          <img src={springfield} />
          </div>
          <p>EL RIFLE QUE MODERNIZÓ EL PODER DEL DISPARO, el Lancaster Springfield es el rifle de retrocarga perfecto. Pase al menos seis meses practicando tiro al blanco una vez al día y le garantizamos que conseguirá su objetivo.</p>
          <h3>Precio........................ <span>$ 247.00</span></h3>
        </div>

      </div>
    </div>
        {/* ============================== RIFLES =============================== */}
        {/* ============================== Munición Otros =============================== */}
        <div className='PistolSection'>
      <h2>MUNICIÓN</h2>
      <div className='WeaponSection'>

        <div className='Pistols'>
          <h2>Aceite</h2>
          <div className='WeaponImage'>
          <img src={aceite} />
          </div>
          <p>Aceite para armas. Evita que los metales se oxiden o se deslustren. No corroe ni se pone rancio. Mantiene todas las armas limpias y brillantes.</p>
          <h3>Precio........................ <span>$ 5.00</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Flechas</h2>
          <div className='WeaponImage'>
          <img src={flechas} />
          </div>
          <p>Armeria Volkov fabrica flechas de madera, pedernal y plumas de la mejor calidad. Ofrecen una velocidad y una precisión satisfactorias y un vuelo estable a larga distancia.</p>
          <h3>Precio........................ <span>$ 0.50</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Pistola</h2>
          <div className='WeaponImage'>
          <img src={munpist} />
          </div>
          <p>Su opción de confianza. Muchos ven la vida como un fatídico fracaso tras otro, pero eso es porque no tienen la prudencia ni la precaución de comprar un buen montón de cajas de estos cartuchos.</p>
          <h3>Precio........................ <span>$ 0.50</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Revolver</h2>
          <div className='WeaponImage'>
          <img src={munrevolver} />
          </div>
          <p>Rendimiento. Fiabilidad. Precisión. Estos cartuchos surten el efecto deseado y harán que los intrusos reconsideren su actitud.</p>
          <h3>Precio........................ <span>$ 0.50</span></h3>
        </div>

        <div className='Pistols'>
          <div className='WeaponImage'>
          <img src={spam1} />
          </div>
        </div>

        <div className='Pistols'>
          <h2>Escopeta</h2>
          <div className='WeaponImage'>
          <img src={munescopeta} />
          </div>
          <p>Una opción tan clásica como fiable. Si alguna vez se encuentra a una banda de pusilánimes dispuestos a robarle el caballo, estos cartuchos pondrán fin inmediatamente a sus fechorías. Se lo garantizamos.</p>
          <h3>Precio........................ <span>$ 0.50</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Repetidora</h2>
          <div className='WeaponImage'>
          <img src={munrepeticion} />
          </div>
          <p>A los muchachos les encanta dispararles a latas en el campo con estos cartuchos, mientras disfrutan de los últimos días del verano antes de que el largo y oscuro invierno se lleve a sus familiares enfermos.</p>
          <h3>Precio........................ <span>$ 0.50</span></h3>
        </div>

        <div className='Pistols'>
          <h2>Rifles</h2>
          <div className='WeaponImage'>
          <img src={munrifle} />
          </div>
          <p>El estruendo del disparo de su rifle resuena por todo el cañón. Un hombre yace muerto en la distancia. Los pájaros callan al sol del mediodía. Como siempre, King Load no le falla.</p>
          <h3>Precio........................ <span>$ 0.50</span></h3>
        </div>

      </div>
    </div>
        {/* ============================== Munición Otros =============================== */}


      </div>
    </div>
  )
}

export default Monitor