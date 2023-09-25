import supabase from '../../supabase';

const addItemToDB = async (item) => {
  try {
    // Compruebo si el nuevo item que se quiere insertar ya existe en la base de datos
    const { data: exist } = await supabase
      .from('movies_series')
      .select('item_id')
      .eq('item_id', item.item_id);

    // Si ya existe no se vuelve a insertar
    if (exist.length !== 0) return;

    await supabase
      .from('movies_series')
      .insert(item);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default addItemToDB;
