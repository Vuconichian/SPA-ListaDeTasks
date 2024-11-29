import { Tarea } from "./Tarea";

export const ListadoTareas = ({ tareas, setTareas }) => {


    const eliminarTarea = (id) => {
        console.log('Eliminando tarea con id:', id); // Verificar si la función se ejecuta
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        console.log('Tareas actualizadas:', tareasActualizadas); // Verificar el nuevo estado
        setTareas(tareasActualizadas);
    };
    

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            <h2 className="font-black text-3xl text-center">Listado de Tareas</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''} <span className="text-indigo-600 font-bold">tareas</span> aquí
            </p>

            {console.log('Tareas en render:', tareas)}

            {tareas.length === 0 ? (
                <p className="text-center">No hay tareas</p>
                ) : (
                    
                    tareas.map(tarea => (
                    <Tarea 
                        key={tarea.id} // Ahora la key es el id único
                        tarea={tarea}
                        eliminarTarea={eliminarTarea} // Pasamos la función de eliminar tarea como prop
                    />
                ))
            )}
        </div>
    );
};
