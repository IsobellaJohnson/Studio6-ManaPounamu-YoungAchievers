

function Item4() {
    return (
        <div className="Item4">
              <div className="Item2_title">Our Sponsors</div>
            <div className="Item2_dec">
            Applying our values is what helps us thrive, enjoy<br/> what we do, and ship our best work.
            </div>
            <div className="Item4_flex">
            {
                [1,1,1,1,1,1,1,1,1].map((item,index) =>{
                    return <div className="Item_item4"></div>
                })
            }
            </div>
        </div>
    )
}

export default Item4;
