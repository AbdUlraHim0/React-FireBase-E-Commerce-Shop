import { Outlet } from "react-router-dom"

import Directory from "../../components/directory/directory.component"

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1615233500570-c5d7576b4262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMHN0eWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  )
}

export default Home
