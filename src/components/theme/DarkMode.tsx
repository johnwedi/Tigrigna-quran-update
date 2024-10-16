// If you're using React 17 or newer, you don't need to import React just for JSX.
// For older versions, uncomment the next line:
// import React from 'react';
import './DarkMode.css';

interface DarkModeProps {
  onToggle: () => void;
  isDarkMode: boolean;
}

const DarkMode: React.FC<DarkModeProps> = ({ onToggle, isDarkMode }) => {
  const moonSvg = (
    <svg className="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.739 49.739" xmlSpace="preserve">
      <path d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"/>
    </svg>
  );

  const sunSvg = (
    <svg className="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496" xmlSpace="preserve">
      <path d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z"/>
      {/* Additional SVG elements omitted for brevity */}
    </svg>
  );

  return (
    <div className={`dark_mode ${isDarkMode ? 'active' : ''}`}>
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={onToggle}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <div className={`icon ${!isDarkMode ? 'active' : ''}`}>
          {sunSvg}
        </div>
        <div className={`icon ${isDarkMode ? 'active' : ''}`}>
          {moonSvg}
        </div>
      </label>
    </div>
  );
};

export default DarkMode; // Make sure to export your component!
