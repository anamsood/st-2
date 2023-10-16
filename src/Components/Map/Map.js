import "./Map.css";

function Map() {
  return (
    <div className="map">
      <h2>Find us easily now.</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.72849565567!2d72.89122437557896!3d19.119563182093998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ba4e6121d7%3A0x921c203caf8fdaa8!2sKrishika%20Pet%20Salon%20%26%20Home%20Sarvice!5e0!3m2!1sen!2sin!4v1696709157200!5m2!1sen!2sin"
        width="700"
        height="400"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="responsive map"
      ></iframe>
    </div>
  );
}

export default Map;
