
/**
 * Props: height, width, backgroundColor, removeBox
 * State: none
 *
 * BoxList -> Box
*/
function Box({ height, width, backgroundColor, removeBox }) {
    const style = { height, width, backgroundColor };
    return (<div>
        <div style={style}></div>
        <button onClick={removeBox}>X</button>
    </div>);
}

export default Box;