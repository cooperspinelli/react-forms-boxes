import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid';

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

//  render new box form and list of boxes
//  make callback to pass to new box from ('addItem')

//  each box needs a removeBox callback function
//

function BoxList() {

    const [boxList, setBoxList] = useState([])

    function renderBoxes(){
        return(
            <div>
                {boxList.map((box, idx) => (
                   <Box
                   key={box.id}
                   height={box.height}
                   width={box.width}
                   backgroundColor={box.backgroundColor}
                   removeBox={()=>removeBox(idx)}/>
                ))}
            </div>
        )
    }

    function addBox(item){
        setBoxList(boxList => [...boxList, {
            ...item,
            id: uuid()
        }])
    }



    function removeBox(idx){

    }

    //new box form/render boxes
    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox}/>
            {renderBoxes()}
        </div>
    )
}

export default BoxList;