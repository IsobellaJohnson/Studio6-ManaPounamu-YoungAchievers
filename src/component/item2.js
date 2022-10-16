

function Item2() {
    return (
        <div className="Item2_box">
            <div className="Item2_title">Our values</div>
            <div className="Item2_dec">
            Applying our values is what helps us thrive, enjoy<br/> what we do, and ship our best work.
            </div>
            <div className="Item_flex">
                {
                    [1,1,1,1,1,1].map((item,index) =>{
                        return   <div className="Item_item">
                        <div className="Itemf_title">Quality</div>
                        <div className="Itemf_dec">
                        Applying our values is what helps us thrive, enjoy what we do, and ship our best work.and ship our best work.and ship our bestship our best work.and ship our bestship our best work.and ship our bestship our best work.and ship our best
                        </div>
                    </div>
                    })
                 
                }
            </div>
        </div>
    )
}

export default Item2;
