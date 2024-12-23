import React from "react";

function Map() {
  return (
    <div>
      <iframe
      className="my-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116162.22298156704!2d75.74877740000001!3d24.517678500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2sin!4v1732871403318!5m2!1sen!2sin"
        width={"100%"}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
