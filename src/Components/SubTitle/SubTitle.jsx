

const SubTitle = ({title, serviceDetails}) => {
    return (
        <div className="text-center my-8 text-white">
            <h2 className="text-3xl">{title}</h2>
            <hr className="border-dotted border-1 mx-5 my-5"/>
            <p>{serviceDetails}</p>
        </div>
    );
};

export default SubTitle;