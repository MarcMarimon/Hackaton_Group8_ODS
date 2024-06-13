import { supabase } from './supabase'

export const obtenerCategorias = async () => {
    const { data, error } = await supabase.from('categorias').select('*')
    if (error) {
        throw new Error(error.message)
    }
    return data
}
