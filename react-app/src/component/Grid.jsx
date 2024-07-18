import { useEffect, useState } from "react"

const Grid = () => {
    const [ids, setIds] = useState([{id:"",state:false}])
    const [point, setPoint] = useState(0)
    const changeColor = () => {
        const grids = document.querySelectorAll('.cl-grid')
        grids.forEach(function (value) {
            value.addEventListener('click', () => {
                if (ids.length == 0) {
                    value.style.backgroundColor = 'Green'
                    setPoint(point + 1)
                    setIds([...ids, { id: value.id, state: true }])
                }
                else {
                    ids.map(function (val) {
                        console.log(val)
                        if (val.id == value.id && val.state==true) {
                            console.log("Do not click this it is already green")
                        }
                        else if(val.id != value.id && val.state==true){
                            console.log("")
                        }
                        else {
                            value.style.backgroundColor = 'Green'
                            setPoint(point + 1)
                            setIds([...ids, { id: value.id, state: true }])
                        }
                    })
                }
            })
        })
    }
    useEffect(() => {
        console.log(point)
        if (point < 9) {
            changeColor()
        }
        else {
            console.log('you have reached the end point')
        }
    }, [ids])
    return (
        <>
            {/* {console.log(ids)} */}
            <div className="my-grid">
                <div id="g-1" className="cl-grid">
                </div>
                <div id="g-2" className="cl-grid">
                </div>
                <div id="g-3" className="cl-grid">
                </div>
                <div id="g-4" className="cl-grid">
                </div>
                <div id="g-5" className="cl-grid">
                </div>
                <div id="g-6" className="cl-grid">
                </div>
                <div id="g-7" className="cl-grid">
                </div>
                <div id="g-8" className="cl-grid">
                </div>
                <div id="g-9" className="cl-grid">
                </div>
            </div>
        </>
    )
}
export default Grid