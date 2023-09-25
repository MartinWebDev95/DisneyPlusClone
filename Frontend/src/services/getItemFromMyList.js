import supabase from '../../supabase';

const getItemFromMyList = async ({ idItem, userId }) => {
  try {
    const { data } = await supabase
      .from('mylist')
      .select('movies_series(item_id, poster_path, type)')
      .eq('user_id', userId)
      .eq('item_id', idItem);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getItemFromMyList;
