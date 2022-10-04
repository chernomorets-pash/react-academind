import './Window.css';

function Window (props) {
    function deleteVal () {
        console.log('Clicked');
        console.log(props.text);
    };
    return (
        <div className="window">
            <div className="todo">
                <span className="todo__span">
                <h1 className='todo__title'>my todo:</h1>
                <div className="todo__name">{props.text}</div>
                </span>
            </div>
            <button className='window__btn' onClick={deleteVal}>delete</button>
        </div>

    );
}

export default Window;