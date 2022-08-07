const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombreMascota, nombrePropietario, email,fecha, sintomas, id} = paciente;
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente');
        if(respuesta){
            eliminarPaciente(id); 
        }
    }
    
    
    return (
        <div className="mx-4 mb-3 py-10 px-5 shadow-md bg-white rounded-md">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:
                <span className="font-normal normal-case">{" "}{nombreMascota}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Popietario:
                <span className="font-normal normal-case">{" "}{nombrePropietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:
                <span className="font-normal normal-case">{" "}{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha:
                <span className="font-normal normal-case">{" "}{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:
                <span className="font-normal normal-case">{" "}{sintomas}</span>
            </p>

            <div className="flex justify-end">
                <button className="p-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase mr-2" onClick={() => setPaciente(paciente)} >Editar</button>
                <button className="p-3 rounded-md bg-red-500 hover:bg-red-600 text-white font-bold uppercase ml-2" onClick={handleEliminar} >Eliminar</button>
            </div>

        </div>
    )
}

export default Paciente
