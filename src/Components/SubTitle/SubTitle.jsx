

const SubTitle = ({title, serviceDetails}) => {
    return (
        <div className="text-center my-8">
            <h2 className="text-3xl">{title}</h2>
            <hr />
            <p>{serviceDetails}</p>
        </div>
    );
};

export default SubTitle;