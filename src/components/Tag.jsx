import './Tag.css';

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Home: { backgroundColor: '#fda821' },
    Work: { backgroundColor: '#15d4c8' },
    School: { backgroundColor: '#ffd645' },
    Other: { backgroundColor: '#4cdafc' },
    default: { backgroundColor: '#f9f9f9' },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
