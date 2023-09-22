import supabase from '../../supabase';

const getAllItemsFromMyList = async ({ userId }) => {
  try {
    const { data } = await supabase
      .from('mylist')
      .select('movies_series(idItem, posterPath, type)')
      .eq('idUser', userId)
      .order('created_at', { ascending: false });

    return data.map((item) => item.movies_series);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getAllItemsFromMyList;
