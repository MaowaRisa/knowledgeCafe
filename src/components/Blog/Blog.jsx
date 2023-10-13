import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover_img, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className='w-full rounded-lg' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between my-4'>
                <div className='flex gap-6'>
                    <img className='w-14 rounded-full h-14' src={author_img} alt={`Picture of Author ${author}`} />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <span className='text-[#11111199]'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#"> #{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;