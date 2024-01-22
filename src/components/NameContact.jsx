import PropTypes from 'prop-types';

const NameContact = ({ channel }) => {
  return (
    <div className="bg-white p-4 text-gray-700">
      <h1 className="text-2xl font-semibold">{channel.name}</h1>
    </div>
  );
};

NameContact.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default NameContact;
