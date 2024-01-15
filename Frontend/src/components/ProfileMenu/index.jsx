import { useAuth } from '../../context/AuthContext';

import {
  Profile, DivProfile, DivSubmenu, NameUser, ProfileImage, ButtonStyled,
} from './styles';

function ProfileMenu() {
  const { currentUser, loading, handleLogout } = useAuth();

  return (
    !loading && (
      <Profile>
        <DivProfile>
          <NameUser>
            {currentUser?.name ? `${currentUser?.name.substring(0, 15)}...` : 'Usuario demo'}
          </NameUser>

          <ProfileImage
            src={currentUser?.photo ? currentUser?.photo : '/assets/img/profile.png'}
            referrerpolicy="no-referrer"
            alt="Profile"
          />
        </DivProfile>

        <DivSubmenu>
          <ul>
            <ButtonStyled
              type="button"
              onClick={handleLogout}
            >
              Cerrar sesión
            </ButtonStyled>

            <p>Coded by Juan Antonio Martín</p>
          </ul>
        </DivSubmenu>
      </Profile>
    )
  );
}

export default ProfileMenu;
