import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
function Light({children,classN}) {
    const options = {
        plugins: [lgThumbnail, lgAutoplay],
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E'
      };
    return (
        <LightGallery
            elementclassNames={classN}
            options={options}
            >
                {children}
        </LightGallery>
    );
}

export default Light;