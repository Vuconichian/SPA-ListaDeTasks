import { useState } from "react";

export const Formulario = ({ tareas, setTareas }) => {
    const [nombre, setNombre] = useState('');
    const [tipoDeTarea, setTipoDeTarea] = useState('');
    const [devAsignado, setDevAsignado] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [storyPoints, setStoryPoints] = useState('');
    const [fecha, setFecha] = useState('');
    const [resumen, setResumen] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // validar que los campos estén llenos
        if ([nombre, tipoDeTarea, devAsignado, prioridad, storyPoints, fecha, resumen].includes('')) {
            console.log('Hay al menos un campo vacío');
            setError(true);
            return;
        }

        setError(false);

        // objeto con los datos de la tarea
        const objetoTarea = {
            id: Date.now(), // Generar un ID único
            nombre,
            tipoDeTarea,
            devAsignado,
            prioridad,
            storyPoints,
            fecha,
            resumen
        };

        // agregar la tarea al state
        setTareas([
            ...tareas,
            objetoTarea
        ]);

        // reiniciar el formulario
        setNombre('');
        setTipoDeTarea('');
        setDevAsignado('');
        setPrioridad('');
        setStoryPoints('');
        setFecha('');
        setResumen('');
    };

    return (
        <div className="w-1/2">
            <h2 className="text-3xl text-center">Seguimiento de requerimientos</h2>

            <p className="font-black text-lg mt-5 text-center mb-10">
                Añade tareas y <span className="text-indigo-600 font-bold">Adminístralas</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nombre"
                        type="text"
                        placeholder="Nombre del proyecto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoDeTarea">Tipo de tarea</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tipoDeTarea"
                        type="text"
                        placeholder="Tipo de tarea"
                        value={tipoDeTarea}
                        onChange={(e) => setTipoDeTarea(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="devAsignado">Dev Asignado</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="devAsignado"
                        type="text"
                        placeholder="Dev Asignado"
                        value={devAsignado}
                        onChange={(e) => setDevAsignado(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">Prioridad</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="prioridad"
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)}
                    >
                        <option value="">Selecciona una prioridad</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">Story Points</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="storyPoints"
                        type="text"
                        placeholder="Story points"
                        value={storyPoints}
                        onChange={(e) => setStoryPoints(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaDeInicio">Fecha de inicio</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fechaDeInicio"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">Resumen</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="resumen"
                        placeholder="Resumen"
                        value={resumen}
                        onChange={(e) => setResumen(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-600">Todos los campos son obligatorios</p>}

                <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded" type="submit">
                    Agregar tarea
                </button>
            </form>
        </div>
    );
};
