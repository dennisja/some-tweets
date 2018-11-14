import React, { useContext } from 'react';
import Modal from 'react-modal';
import {
  ColorOptionsHolder,
  ColorOption,
  TweetsColumnHeader as Header,
  TweetsColumnHeading as Heading,
  EditLayoutSettingTitle,
} from './styled';
import { THEME_NAMES } from './configs';
import { SetThemeContext } from './context';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 20,
    width: '40%',
    height: '40%',
  },
};

Modal.defaultStyles.overlay = {
  ...Modal.defaultStyles.overlay,
  backgroundColor: `rgba(0, 0, 0, 0.4)`,
  zIndex: 19,
};

Modal.setAppElement('#root');
function EditLayoutModal({ isOpen, closeModal }) {
  const { setTheme } = useContext(SetThemeContext);

  function changeTheme(themeName) {
    setTheme(themeName);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      arai={{ labelledby: 'edit-header' }}
    >
      <Header>
        <Heading id="edit-header">Edit Layout Settings</Heading>
      </Header>
      <EditLayoutSettingTitle id="change-color">
        Change App Theme
      </EditLayoutSettingTitle>
      <ColorOptionsHolder aria-labelledby="change-color">
        <ColorOption onClick={() => changeTheme(THEME_NAMES.default)} />
        <ColorOption
          bgColor={THEME_NAMES.black}
          onClick={() => changeTheme(THEME_NAMES.black)}
        />
        <ColorOption
          bgColor={THEME_NAMES.blue}
          onClick={() => changeTheme(THEME_NAMES.blue)}
        />
        <ColorOption
          bgColor={THEME_NAMES.purple}
          onClick={() => changeTheme(THEME_NAMES.purple)}
        />
        <ColorOption
          bgColor={THEME_NAMES.red}
          onClick={() => changeTheme(THEME_NAMES.red)}
        />
      </ColorOptionsHolder>
    </Modal>
  );
}

export default EditLayoutModal;
