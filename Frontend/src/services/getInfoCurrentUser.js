import supabase from '../../supabase';

// Gets the current user details if there is an existing session
const getInfoCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();

  return {
    id: user.id,
    name: user.user_metadata.full_name,
    photo: user.user_metadata.avatar_url,
  };
};

export default getInfoCurrentUser;
