import Card from "./Card"

export default function CardList({filteredArr}) {
   
  let usersArr = filteredArr.map((user)=>{
    return <Card user = {user} key={user.id}/>
  })

 

  return (
    <div className="cardList">
     { usersArr}
    </div>
  )
}
