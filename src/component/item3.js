

function Item3({content}) {
    return (
        <div className="Item3">
             <div className="Item2_title">Our values</div>
            <div className="Item2_dec">
            Applying our values is what helps us thrive, enjoy<br/> what we do, and ship our best work.
            </div>
            <div style = {{height:"66px"}}></div>
            <div className ="Item3_flex">

                {
                    [1].map((item,index) =>{
                        return <div className="Item3_item">
                        <div className="Item3_title">
                        Quality
                        </div>
                        <div className="Item3_dec">
                        {content}
                        </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Item3;
