import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

/**
 *
 * App -> BoxList -> Box, NewBoxForm
 *
 * State:
 * -boxList: array: [{backgroundColor, height, width, id}, ...]
 *
 * Props:
 * none
 */

//work on boxlist later

function BoxList() {

    const [boxList, setBoxList] = useState([]);

    function renderBoxes() {
        return (
            <div>
                {boxList.map((box, idx) => (
                    <Box
                        key={box.id}
                        height={box.height}
                        width={box.width}
                        backgroundColor={box.backgroundColor}
                        removeBox={() => removeBox(box.id)} />
                ))}
            </div>
        );
    }

    /** Adds box */
    function addBox(item) {
        setBoxList(boxList => [...boxList, {
            ...item,
            id: uuid()
        }]);
    }

    /** Removes box at index idx */
    function removeBox(id) {
        setBoxList(boxList => boxList.filter(box => box.id !== id))
    }

    //new box form/render boxes
    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
}

export default BoxList;