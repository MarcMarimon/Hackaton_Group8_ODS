import { supabase } from './supabase'

let cursos = []

export const useCursosApi = () => {
    const obtenerCursos = async () => {
        if (cursos.length === 0) {
            const { data, error } = await supabase.from('cursos').select('*')
            if (error) {
                throw new Error(error.message)
            }
            cursos = data
        }
        return cursos
    }

    const crearCurso = async (nombre, descripcion, categoriaId, usuarioId) => {
        const { data, error } = await supabase.from('cursos').insert([
            { nombre, descripcion, categoria_id: categoriaId, usuario_id: usuarioId }
        ])
        if (error) {
            throw new Error(error.message)
        }
        cursos.push(data[0])
        return data
    }

    const eliminarCurso = async (cursoId) => {
        const { data, error } = await supabase.from('cursos').delete().match({ id: cursoId })
        if (error) {
            throw new Error(error.message)
        }
        cursos = cursos.filter(curso => curso.id !== cursoId)
        return data
    }

    return {
        obtenerCursos,
        crearCurso,
        eliminarCurso
    }
}
