import React from "react";

function DownloadIcon({ onClickHandle }) {
  return (
    <div
      onClick={() => {
        onClickHandle();
      }}>
      <svg
        width="22px"
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        viewBox="0 0 482.462 482.462"
        xmlSpace="preserve">
        <g>
          <g>
            <polygon
              points="382.647,256.899 251.074,388.467 251.074,0 231.382,0 231.382,388.467 99.815,256.899 85.891,270.822 
                241.228,426.159 396.569,270.822 		"
            />
          </g>
        </g>
        <g>
          <g>
            <rect x="36.756" y="462.769" width="408.95" height="19.692" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default DownloadIcon;
