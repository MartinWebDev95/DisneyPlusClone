import supabase from '../../supabase';

const deleteItemFromMyList = async ({ idItem, userId }) => {
  try {
    // Cuento cuantas veces aparece el item a eliminar en la tabla mylist
    const { count } = await supabase
      .from('mylist')
      .select('*', { count: 'exact', head: true })
      .eq('item_id', idItem);

    // Elimino el item de la tabla mylist
    await supabase
      .from('mylist')
      .delete()
      .eq('user_id', userId)
      .eq('item_id', idItem);

    // Si solo existe una tupla con ese item_id, elimino el item tambien de la tabla movies_series
    if (count === 1) {
      await supabase
        .from('movies_series')
        .delete()
        .eq('item_id', idItem);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteItemFromMyList;
