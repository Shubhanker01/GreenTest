import { useEffect, useState } from "react"

const Grid = () => {
    const [ids, setIds] = useState([])
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
                    if (ids.some(id => id.id === value.id)) {
                        return;
                    }
                    else {
                        value.style.backgroundColor = 'Green'
                        setPoint(point + 1)
                        setIds([...ids, { id: value.id, state: true }])
                    }
                }

            }
            )
        })

    }
    const changeToOrange = () => {
        if (point == 9) {
            const grids = document.querySelectorAll('.cl-grid')
            let i = 0
            ids.forEach(function (id) {
                setTimeout(() => {
                    document.getElementById(id.id).style.backgroundColor = 'Orange'
                }, 2000 * i)
                i++
            })
        }
    }
    useEffect(() => {
        changeColor()
        changeToOrange()
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