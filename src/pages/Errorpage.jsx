import { useRouteError } from "react-router-dom"
import { NavLink } from "react-router-dom";

export const Errorpage = ()=> {
    const error = useRouteError();
    
    return (
            <div className="text-center py-[4rem]">
  <h1 className="text-blue-50 text-[2.4rem] font-bold">ERROR</h1>
  {error && <p className="text-white">{error.data}</p>}
  <NavLink to="/">
    <button className="mt-[2rem] px-[2.4rem] py-[0.8rem] bg-[#202020] text-white rounded-[1.5rem]">
      GO HOME
    </button>
  </NavLink>
</div>

    )

}