import supabase from '../../supabase';

const addItemToDB = async (item) => {
  try {
    const { data } = await supabase
      .from('movies_series')
      .insert(item)
      .select();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default addItemToDB;
