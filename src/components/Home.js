import React ,{ useEffect }from 'react'
import '../styl/Home.css'

// 之後可以新增往上往下滑縮減版面


const Home = () => {
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position)
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = document.documentElement;
  if (scrollTop + clientHeight === scrollHeight){
    setTimeout(() => {
      window.location.href ='./Description'
    }, "500")

    
  }
    
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
        <div className='title-content'>
          <p className='top-title'>PLAY LORDLE</p>
          
          <div className='middle-title'>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          <p>PLAY LORDLE</p>
          </div>
          
          <div className='bottom-title'>
            <p className='bottom-title-big'>PLAY LORDLE</p>
            <p className='bottom-title-small'>Creativity doesn’t wait for that perfect moment. It fashions its own perfect moments out of ordinary ones. ↘</p>
          </div>
        </div>
        
    </div>
  )
}

export default Home

