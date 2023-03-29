import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import p1 from "../img/1.jpeg";
import p5 from "../img/5.jpeg";
import p6 from "../img/6.jpeg";
import p7 from "../img/7.jpeg";
import p8 from "../img/8.jpeg";
import p9 from "../img/9.jpeg";
import p10 from "../img/10.jpeg";
import p11 from "../img/11.jpeg";

export default () => {
    return (<div className='page-wrapper'>
        <Gallery>
    <Item
      original={p1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={p1} className="picture" />
      )}
    </Item>
    <Item
      original={p5}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={p5} className="picture" />
      )}
    </Item>
    <Item
      original={p6}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={p6} className="picture" />
      )}
    </Item>
    <Item
      original={p7}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={p7} className="picture" />
      )}
    </Item>
    <Item
      original={p8}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={p8} className="picture" />
      )}
    </Item>
    <Item
      original={p9}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={p9} className="picture" />
      )}
    </Item>
    <Item
      original={p10}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={p10} className="picture" />
      )}
    </Item>
    <Item
      original={p11}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={p11} className="picture" />
      )}
    </Item>
  </Gallery>
    </div>)
    }