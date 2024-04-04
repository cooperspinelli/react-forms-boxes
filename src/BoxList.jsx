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
                        removeBox={() => removeBox(idx)} />
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
    function removeBox(idx) {
        setBoxList(boxList => {
            const boxListClone = [...boxList];
            boxListClone.splice(idx, 1);
            return boxListClone;
        });
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