import supabase from '../../supabase';

// Obtengo los detalles del usuario actual si existe una sesión activa
const getInfoCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();

  return {
    id: user.id,
    name: user.user_metadata.full_name,
    photo: user.user_metadata.avatar_url,
  };
};

export default getInfoCurrentUser;
