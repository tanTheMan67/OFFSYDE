const UserCard = ({firstname,lastname,skills,photourl,gender,age})=>{
    return(
        <div className="card bg-cyan-400 w-72 m-4 shadow-red-600 shadow-lg flex justify-center align-middle uppercase">
        <figure >
        <img src={photourl.length==0?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1v2JoYlN5d9QxIsBmx6sD2nnX_LFdL2phg&s":photourl}></img>
        </figure>
        <div className="card-body flex items-center justify-center ">
          <h2 className="card-title font-extrabold uppercase">{firstname+" "+lastname}</h2>
          <p className="font-bold">{skills.length>0?skills:"Acrobatics"}</p>
          <p className="font-bold">{gender.length>0?gender:""}</p>
          <p className="font-bold">{age.length>0?age:""}</p>
          <div className="card-actions">
<button className="btn btn-soft btn-secondary">Interested</button>
<button className="btn btn-soft btn-success">Ignore</button>
          </div>
        </div>
      </div>
    )
}
export default UserCard;