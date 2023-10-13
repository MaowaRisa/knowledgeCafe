import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-white rounded-md'>
            <h2 className="text-lg p-5 my-4">{title}</h2>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;