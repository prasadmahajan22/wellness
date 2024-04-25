
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return (
    <Carousel>
      <div>
         <img src="https://media.istockphoto.com/id/1429251630/photo/light-shining-on-zen-stones-with-words-mind-body-soul-on-blurred-background-customize-space.jpg?s=1024x1024&w=is&k=20&c=A3NymKLA7D5KahAvaD4IXWpHkvixMzAu21SCEwyCxp8="  />
       </div>
       <div>
         <img src="https://media.istockphoto.com/id/502937834/photo/young-woman-practicing-yoga-on-the-beach-at-sunset.jpg?s=1024x1024&w=is&k=20&c=ag-Phnbnn19bsxVRDEMl3XsPoIB4TRv7EFpQhOvEX0s=" />
        
       </div>
      <div>
      <img src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      
     </div>
   </Carousel>
  );
};
export default CarouselPage