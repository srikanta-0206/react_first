export const Ert = ()=>{
   const handle= (ww) => {
    alert(`hi ${ww}`)
   }
   const hover= (ww) => {
    alert(`hei hover ${ww}`)
   }
    return (
        <>
      <Welcome onClick={()=>handle("vinod")} onMouseEnter={()=>{hover("vinod")}}>
      </Welcome>
        </>
    )

}
const Welcome = (pr) =>{

    const hand = ()=>{
        console.log("hey user");
        pr.onClick()
        
    }
return (
    <>
    <button onClick={pr.onClick}>click</button>
    <button onMouseEnter={pr.onMouseEnter}>hover</button>
    <button onClick={hand}>click me</button>
    </>
)

    
}