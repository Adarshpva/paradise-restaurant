import { Container, Navbar } from 'react-bootstrap'
import './Home.css';

import React from 'react'

function Home() {
  return (
    <>
<div className='banner'>
            <Navbar bg="dark" variant="fw-bolder" >
                <Container className='d-flex'>
                    <Navbar.Brand className='brand fs-4  text-white ' href="/">
                        <i class="fa-sharp fa-solid fa-globe fa-spin"> </i> PARADISE
                    </Navbar.Brand>
                    <form className='d-flex '>

                        <li>
                            <a className='product text-white fw-bolder' href='products' >Products</a>
                        </li>
                        <li>
                            <a className='about text-white fw-bolder' href='about' >About</a>
                        </li>

                        <li>
                            <a className='login text-white fw-bolder' href='login' >Login</a>
                        </li>


                        <li>
                            <a className='cart text-white ' href='cart'><i class="fa-solid fa-cart-arrow-down" style={{color:'#f7f9fd'}}></i></a>
                        </li>



                    </form>


                </Container>
            </Navbar>
        </div>




        <div class="full container  mt-5 text-center text-dark">
    <div class="px-4 px-lg-5 mt-7  border-white rounded fw-bolder ">
        <div class="about gx-4 gx-lg-5    ">

            <h2 >------ About Us ------</h2>
            <p>PARADISE is  sit amet consectetur adipisicing elit. Dolorem non voluptatibus mollitia, recusandae
                dignissimos saepe repellat eveniet possimus maxime ipsum aut culpa voluptatum quam sequi temporibus
                incidunt alias? Rem, placeat.ipsum dolor sit amet consectetur adipisicing elit. Dolorem non voluptatibus
                mollitia, recusandae dignissimos saepe repellat eveniet possimus maxime ipsum aut culpa voluptatum ipsum
                dolor sit amet consectetur adipisicing elit. Dolorem non voluptatibus mollitia, recusandae dignissimos
                saepe repellat eveniet possimus maxime ipsum aut culpa voluptatum ipsum dolor sit amet consectetur
                adipisicing elit. Dolorem non voluptatibus mollitia, recusandae dignissimos saepe repellat eveniet
                possimus maxime ipsum aut culpa voluptatum ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                non voluptatibus mollitia, recusandae dignissimos saepe repellat eveniet possimus maxime ipsum aut culpa
                voluptatum ipsum dolor sit amet consectetur adipisicing elit. Dolorem non voluptatibus mollitia,
                recusandae dignissimos saepe repellat eveniet possimus maxime ipsum aut culpa voluptatum ipsum dolor sit
                amet consectetur adipisicing elit. Dolorem non voluptatibus mollitia, recusandae dignissimos saepe
                repellat eveniet possimus maxime ipsum aut culpa voluptatum.</p>
        </div>
    </div>
</div>






{/* {card section/*  */}
<section>
    <div class="container px-4 px-lg-5 mt-7 border-dark rounded p-3">
        <div class="row gx-4 gx-lg-5 row-cols-4 row-cols-md-4 row-cols-xl-4 ">

            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div  class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://content.jdmagicbox.com/comp/ooty/x6/9999px423.x423.150420234518.q7x6/catalogue/campfire-nights-masinagudi-ooty-hotels-5u1sky30rk.jpg" alt="" />

            </div>
            </div> 


         {/* <!-- exclusive offers --> */}
        <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://wallpapercave.com/wp/wp4426983.jpg" alt="" />

            </div>
            </div> 

            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://e1.pxfuel.com/desktop-wallpaper/822/902/desktop-wallpaper-hotels-with-a-pool-day-pass-you-can-use-for-much-hotel-swimming-pool.jpg" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://e0.pxfuel.com/wallpapers/3/335/desktop-wallpaper-dj-party-background.jpg" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://www.hitsa.com.au/wp-content/uploads/types-of-chefs-1030x687.jpg" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://c1.wallpaperflare.com/preview/668/624/24/hotel-bathroom-interior-villa.jpg" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBiYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://p4.wallpaperbetter.com/wallpaper/164/214/523/jeep-rubicon-off-road-wrangler-hd-wallpaper-preview.jpg" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/coorg-jungle-camp-kushalnagar/Jeep_Ride_pjuswz" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://www.businessinsider.in/photo/52569133.cms" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img  style={{height:'280px'}} class="card-img-top"
                src="https://s3.amazonaws.com/uploads.opalcollection.com/app/uploads/2020/07/28200825/Untitled-design-21.png" alt="" />

            </div>
            </div> 


            {/* <!-- exclusive offers --> */}
            <div class="col mb-5 mt-5">
        <div class="card h-100 p-7 ">
            {/* <!-- Product image--> */}
             <img style={{height:'280px'}}  class="card-img-top"
                src="https://thumbs.dreamstime.com/b/kids-playground-children-play-summer-park-kids-climbing-sliding-outdoor-playground-children-play-sunny-summer-park-111040496.jpg" alt="" />

            </div>
            </div> 




        </div>
    </div>
</section>



</>
  )
}

export default Home