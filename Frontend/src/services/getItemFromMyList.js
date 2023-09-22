import supabase from '../../supabase';

const getItemFromMyList = async ({ idItem, userId }) => {
  try {
    const { data } = await supabase
      .from('mylist')
      .select('movies_series(idItem, posterPath, type)')
      .eq('idItem', idItem)
      .eq('idUser', userId);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getItemFromMyList;
