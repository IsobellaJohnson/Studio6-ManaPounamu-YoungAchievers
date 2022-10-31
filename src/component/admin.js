import {save7, save8} from '../req/api.js';
import { useEffect,useState,useCallback,useRef   } from "react";
import { createExcel } from "../excel.js";


function Admin() {
    const dHandle2 = ((item) =>{
        console.log(8, item)
        const {nominatingSchool, level, year, studentName, iwi, studentImage, community, leadership, academic, sporting, otherInformation, nomineeTestimonia, nominee, nomineePosition, whanauEndorsement, endorserName, endorserRelationship, mediaConsentPermissionm,mediaContentDiscretion, mediaConsentUpdate,mediaConsentMinor, providerName, providerPhone,providerEmail,understand} = item;
        const params = {
            nominatingSchool:nominatingSchool,
            level:level,
            year:year,
            studentName:studentName,
            iwi:iwi,
            studentImage:studentImage,
            community:community,
            leadership:leadership, 
            academic:academic, 
            sporting:sporting, 
            otherInformation:otherInformation, 
            nomineeTestimonia:nomineeTestimonia, 
            nominee:nominee, 
            nomineePosition:nomineePosition, 
            whanauEndorsement:whanauEndorsement, 
            endorserName:endorserName, 
            endorserRelationship:endorserRelationship, 
            mediaConsentPermissionm:mediaConsentPermissionm,
            mediaContentDiscretion:mediaContentDiscretion, 
            mediaConsentUpdate:mediaConsentUpdate,
            mediaConsentMinor:mediaConsentMinor, 
            providerName:providerName, 
            providerPhone:providerPhone,
            providerEmail:providerEmail,
            understand:understand
        }
        createExcel(params);
    }) 
    const [rList, setrList] = useState([]);
    const dHandle1 = (async () =>{
        const p1 ={
            page:1,
            pageSize:10,
            sort:'id:ASC',
          }
          const res = await save7(p1);
          const {results} = res.data;
          rlist.current = results;
          setrList(results);
          console.log(8 , rList)
   })
   
      const dHandle = async (e) =>{
            const {id} = e.target;
            const res = await save8(id );
            dHandle1(); 
            console.log(8, res)
      }
      var rlist = useRef([]);
      const fetchApi = useCallback(async () => {  
        dHandle1()
      })
      useEffect ( () => {
        fetchApi();      

    },[])
    return (
        <div>
        <div style = {{height:"100px  "}}></div>
        <div className="admin_box">
        <div style = {{height:"50px"}}></div>
        <div className="admin_title">
           info 
        </div>
        <div style = {{height:"20px"}}></div>
        <div id="s_from1">
        <table id="s_from">
        <thead>
           <tr style = {{background:"#b7dcb6"}}>
           <th>operate</th>
           <th>nominatingSchool</th>
           <th>level</th>
           <th>year</th>
           <th>studentName</th>
           <th>iwi</th>
           <th>studentImage</th>
           <th>community</th>
           <th>leadership</th>
           <th>academic</th>
           <th>sporting</th>
           <th>otherInformation</th>
           <th>nomineeTestimonia</th>
           <th>nominee</th>
           <th>nomineePosition</th>
           <th>whanauEndorsement</th>
           <th>endorserName</th>
           <th>endorserRelationship </th>
           <th>mediaConsentPermission</th>
           <th>mediaContentDiscretion</th>
           <th>mediaConsentUpdate</th>
           <th>mediaConsentMinor</th>
           <th>providerName</th>
           <th>providerPhone</th>
           <th>providerEmail</th>
           <th>understand</th>
           </tr>
           </thead>
           <tbody>
          {rList.map((item,index) =>{
         return index ==null ?'':  <tr key ={index}>         
           <td><a onClick ={dHandle}  id = {item.id}> Delete</a>
               <a onClick ={() =>{dHandle2(item)}} >Download</a></td>
           <td>{item.nominatingSchool}</td>
           <td>{item.level}</td>
           <td>{item.year}</td>
           <td>{item.studentName}</td>
           <td>{item.iwi}</td>
           <td>{rlist.current[index].studentImage ?rlist.current[index].studentImage.url:' '}</td>
           <td>{item.community}</td>
           <td>{item.leadership}</td>
            <td>{item.academic}</td>
           <td>{item.sporting}</td>
           <td>{item.otherInformation}</td>
           <td>{item.nomineeTestimonia}</td>
           <td>{item.nominee}</td>
           <td>{item.nomineePosition}</td>
           <td>{item.whanauEndorsement}</td>
           <td>{item.endorserName}</td>
           <td>{item.endorserRelationship}</td>
           <td>{rlist.current[index].mediaConsentPermission + ''}</td>
           <td>{rlist.current[index].mediaContentDiscretion + ' '}</td>
           <td>{rlist.current[index].mediaConsentUpdate + ''}</td>
           <td>{rlist.current[index].mediaConsentMinor + ''}</td>
           <td>{item.providerName}</td>
           <td>{item.providerPhone}</td>
           <td>{item.providerEmail}</td>
           <td>{rlist.current[index].understand +''}</td>  
           </tr>
            })}
           </tbody>
        </table>
        </div>
        </div>
        </div>
    )
}

export default Admin;
