import './Bottle.css'

// 8. here we recv the handleAddToCart
const Bottle = ({ bottle, handleAddToCart }) => {

    // 4. distructure the single bottle object name img to show this name img price etc

    const { name, img, price } = bottle;

    return (
        <div className="bottle">

            {/* 5. now final time to show this datas */}
            <h4>Name: {name}</h4>
            <img src={img} alt="" />
            <h4>Price: ${price}</h4>
            {/* 9. here we set the handleAddToCart fuction on onclick */}
            <button onClick={handleAddToCart}>Purchase Now</button>
        </div>
    );
};

export default Bottle;