import {useState, useEffect} from 'react' //HOOKS
import Error from './Error';

const Formulario = ({pacientes,setPacientes,paciente, setPaciente}) => {
  
  // Hooks
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() =>{
    if(Object.keys(paciente).length > 0){
      setNombreMascota(paciente.nombreMascota);
      setNombrePropietario(paciente.nombrePropietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  },[paciente])

  const generarId = function (){
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return fecha+random;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del formulario
    if([nombreMascota,nombrePropietario,email,fecha,sintomas].includes('')){
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombreMascota,
      nombrePropietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }

    if(paciente.id){
      // Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({});

    } else{
      // Nuevo registro
      objetoPaciente.id = generarId();
      // copio pacientes // metodo inmutable
      setPacientes([...pacientes, objetoPaciente]);
    }
    

    // Reiniciar formulario
    setNombreMascota('');
    setNombrePropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    // FORMULARIO
    <div className='mb-10 md:w-1/2 lg:w-2/5 mx-4'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-4 text-center mb-10 font-semibold'>
        Añade Pacientes y {''} 
        <span className='text-indigo-600 font-bold'> Administralos</span>
      </p>

      <form action="" className='bg-white shadow-md rounded-md py-10 px-5' onSubmit = {handleSubmit} >
        {error && <Error>Todos los campos son obligatorios</Error>} 

        <div className='mb-3'>
          <label htmlFor="mascota" className='block font-bold uppercase text-gray-700'>Nombre mascota</label>
          <input id='mascota' type="text" placeholder='Nombre de la mascota' className='border-2 py-1.5 px-1.5 w-full placeholder-gray-500 rounded-md'
           value={nombreMascota} onChange= { (e) => setNombreMascota(e.target.value) } />  
        </div>

        <div className='mb-3'>
          <label htmlFor="propietario" className='block font-bold uppercase text-gray-700 py-1'>Nombre propietario</label>
          <input id='propietario' type="text" placeholder='Nombre del propietario' className='border-2 py-1.5 px-1.5 w-full placeholder-gray-500 rounded-md' value={nombrePropietario} onChange= { (e) => setNombrePropietario(e.target.value) } />
        </div>

        <div className='mb-3'>
          <label htmlFor="email" className='block font-bold uppercase text-gray-700 py-1'>email</label>
          <input id='email' type="email" placeholder='Escribe el email' className='border-2 py-1.5 px-1.5 w-full placeholder-gray-500 rounded-md' value={email} onChange= { (e) => setEmail(e.target.value) } />
        </div>

        <div className='mb-3'>
          <label htmlFor="alta" className='block font-bold uppercase text-gray-700 py-1'>Alta</label>
          <input id='alta' type="date" className='border-2 py-1.5 px-1.5 w-full placeholder-gray-500 rounded-md'
          value={fecha} onChange= { (e) => setFecha(e.target.value) } />
        </div>

        <div className=''>
          <label htmlFor="sintomas" className='block font-bold uppercase text-gray-700 py-1'>sintomas</label>
          <textarea name="" id="sintomas" cols="10" rows="5" placeholder='Describe los sintomas' className='px-1.5 py-1.5 border-2 w-full rounded-md' value={sintomas} onChange= { (e) => setSintomas(e.target.value) }  ></textarea>
        </div>

        <input value={paciente.id ? 'Editar paciente' : 'Agregar paciente' } type="submit" className='bg-indigo-600 w-full py-3 text-white uppercase font-bold rounded-md mt-3 hover:bg-indigo-700 cursor-pointer transition-all' />

      </form>
    </div>
  )
}

export default Formulario
