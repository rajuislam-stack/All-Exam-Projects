

export default function Card({user}) {
  
  return (
    <div className="card">
      
     <div>
     <img src="../assets/profile-img.jpg" alt="profile-img" />
     </div>

     <div>
      <h2>{user.name}</h2>
      <p><i className="fa-regular fa-envelope"></i> {user.email}</p>
      <p><i className="fa-solid fa-phone-volume"></i> {user.phone}</p>
      <p><i className="fa-solid fa-magnifying-glass-location"></i> {user.address.city}</p>
     </div>
      
    </div>
  )
}
