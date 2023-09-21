import supabase from '../../supabase';

const addItemToMyList = async (item) => {
  try {
    const { data } = await supabase
      .from('mylist')
      .insert(item);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default addItemToMyList;
