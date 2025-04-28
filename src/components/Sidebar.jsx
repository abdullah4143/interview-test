import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCog, faEnvelope, faComment, faBars,faXmark } from '@fortawesome/free-solid-svg-icons'; // also import faBars
import './Sidebar.css';
import pp from '../assets/react.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}> 
      
      <div className="flex head">
        {isOpen && <h2>The Law Intelligence</h2>}
        <button className="close-button" onClick={toggleSidebar}>
          {!isOpen && <FontAwesomeIcon icon={faBars} />}
          {isOpen && <FontAwesomeIcon icon={faXmark} />}

        </button>
      </div>

      <button className={`new-chat-button flex  ${isOpen ? '' : 'collapsed'} `}>
        <FontAwesomeIcon icon={faPlus} /> {isOpen && <p>New chat</p>}
      </button>

      <div className="cat">
        {isOpen && <p>Recent Conversations</p>}
      </div>

      <div className={`conversations`}>
        <div className={`conversation-item ${isOpen ? '' : 'collapsed'}`}>
          <FontAwesomeIcon icon={faComment} /> {isOpen && 'How to register an LLC in US'}
        </div>
      </div>

      <div className={`conversations`}>
        <div className={`conversation-item ${isOpen ? '' : 'collapsed'}`}>
          <FontAwesomeIcon icon={faComment} /> {isOpen && 'How to register an LLC in US'}
        </div>
      </div>

      {isOpen && <hr />}

      { isOpen &&
        <div className="info flex-column">
        <div className="btn-group">
          <FontAwesomeIcon icon={faCog} /> Settings
        </div>

        <div className="btn-group">
          <FontAwesomeIcon icon={faEnvelope} /> Contact us
        </div>
      </div>}

      <div className="profile flex">
        <div className="profile-group">
          <img src={pp} alt="Profile Picture" />
          {isOpen && <span>Abdullah Ashraf</span>}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
