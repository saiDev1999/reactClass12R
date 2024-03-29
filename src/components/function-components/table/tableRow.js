



export const TableRow =(props)=>{
    const{data,extraProp}=props
    return(
        <tr>
        <td>{data[0]}</td>
        <td>{data[1]}</td>
        <td>{data[2]}</td>
        <td>{extraProp}</td>
    </tr>

    )
}