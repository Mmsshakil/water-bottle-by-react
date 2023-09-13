import './Bottle.css'

const Bottle = ({ bottle }) => {

    // 4. distructure the single bottle object name img to show this name img price etc

    const { name, img, price } = bottle;

    return (
        <div className="bottle">

            {/* 5. now final time to show this datas */}
            <h4>Name: {name}</h4>
            <img src={img} alt="" />
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default Bottle;