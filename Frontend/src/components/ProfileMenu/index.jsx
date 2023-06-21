import { useAuth } from '../../context/AuthContext';

import {
  Profile, DivProfile, DivSubmenu, NameUser, ProfileImage, ButtonStyled,
} from './styles';

function ProfileMenu() {
  const { user, handleLogout, loading } = useAuth();

  return (
    !loading && (
      <Profile>
        <DivProfile>
          <NameUser>
            {`${user?.displayName.substring(0, 15)}...`}
          </NameUser>

          <ProfileImage
            src={user.photos[0].value}
            referrerpolicy="no-referrer"
            alt="Profile"
          />
        </DivProfile>

        <DivSubmenu>
          <ul>
            <ButtonStyled type="button" onClick={handleLogout}>Cerrar sesión</ButtonStyled>
            <p>Coded by Juan Antonio Martín</p>
          </ul>
        </DivSubmenu>
      </Profile>
    )
  );
}

export default ProfileMenu;