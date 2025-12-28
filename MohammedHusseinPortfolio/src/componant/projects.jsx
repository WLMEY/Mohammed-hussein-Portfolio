const Project = (props) => {

    const img=props.img;
    const title=props.title;
    const description=props.description;
    const link =props.link;
    const skils =props.skils;
function openlinks(){
    window.open({"https://prayers-v2.vercel.app/"},"_blank");
}
    return ( 


<div onClick={openlinks} className="project flex flex-col justify-center items-start p-5 rounded-2xl " >
                    <div className="project_img ">
                        <img src={img} className="rounded-2xl " alt="" />
                    </div>
                    <div className="project_about w-full flex flex-col justify-center items-start sm:gap-0 gap-2" >
                        <h3 className="mainText text-3xl ">{title}</h3>
                        <p className="subText">{description}</p>
                        <div className="project_tecnology  placeholders flex flex-row justify-start items-center gap-3">
  
                            {skils.map((value)=><span className="project_skills w-15 sm:w-fit pt-0.5 sm:pt-0 pb-0.5  sm:pb-0 rounded-2xl  text-sm text-center" >{value}</span>)}
                        </div>
                        <span onClick={openlinks} className="btn block sm:hidden  w-full p-2 text-center rounded-2xl mt-5"> View Live</span>
                    </div>
                </div>

    );
}
 
export default Project;
