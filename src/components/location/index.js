import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="google_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.433543011033!2d90.39873476625955!3d23.803177692281746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2067f8c3cc94131f!2sSena+Malancha!5e0!3m2!1sen!2sbd!4v1544109210914"
        width="100%"
        height="500"
        frameBorder="0"
        allowfullscreen
      >
      </iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>      
    </div>
  );
};

export default Location;