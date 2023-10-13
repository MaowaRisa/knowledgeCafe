import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 flex flex-col gap-6">
            <h2 className='py-6 px-10 border-2 border-blue-400 text-2xl font-semibold rounded-xl text-blue-400 bg-[#1111110d]'>Spent time on read: 177 min</h2>
            <div className='p-8 bg-[#1111110d] rounded-xl'>
                <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
                <div>
                    {
                        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;