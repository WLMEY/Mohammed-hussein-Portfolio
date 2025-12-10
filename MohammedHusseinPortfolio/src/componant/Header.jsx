const Header = () => {
    return (  <div className="Header  hidden sm:flex  flex-row justify-between items-center  sm:p-5  rounded-2xl gap-10">
        <div className="icons flex flex-row justify-between items-center gap-3">
            <a href="mailto:dev.mohammedhussein@gmail.com" target="_blank"> <i className=" fa-solid fa-at"></i>          </a>         
            <a href="https://github.com/WLMEY?tab=overview&from=2025-01-01&to=2025-01-01" target="_blank"> <i className="fa-solid fa-code"></i>         </a>       
            <a href="https://www.linkedin.com/in/mohammed-hussein-kamel-4247b4211/" target="_blank"> <i className="fa-brands fa-linkedin-in"></i> </a>      
        </div>

        <div className="titles flex flex-row justify-between items-center w-1/3">
            <span>   <a className=" icon" href="#Home"   >Home</a></span>
            <span>   <a className=" icon" href="#Project">Project</a></span>
            <span>   <a className=" icon" href="#Skills" >Skills </a></span>
            <span>   <a className=" icon" href="#Contact">Contact</a></span>


        </div>

        <div className="loco flex flex-row justify-between items-center gap-3">
            <span>Mohammad Hussein</span>
            <i className=" logoCode fa-solid fa-code"></i>



        </div>
        
    </div>);
}
 
export default Header;