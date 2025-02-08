
import Link from 'next/link';



// export default function HomePage() {
//   return (
//     <div>
//       <h1>Hello world from Next.js</h1>
//       <div>
//         <Link href="/character-1">
//           <button>Character 1</button>
//         </Link>
//         <Link href="/character-2">
//           <button>Character 2</button>
//         </Link>
//         <Link href="/character-3">
//           <button>Character 3</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import Head from 'next/head';
import '../styles/bootstrap.css';
// import '../styles/font-awesome.min.css';
import '../styles/style.css';
import '../styles/responsive.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Carint</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="shortcut icon" href="/images/fevicon.png" type="" />
      </Head>
      <div className="sub_page">
        <div className="hero_area">
          {/* header section starts */}
          <header className="header_section">
            
            <div className="header_bottom">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                  <a className="navbar-brand" href="index.html">
                    <span>Empathetic Presentation Helper</span>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""></span>
                  </button>
                 
                </nav>
              </div>
            </div>
          </header>
          {/* end header section */}
        </div>

        {/* service section */}
        <section className="service_section layout_padding">
          <div className="service_container">
            <div className="container">
              <div className="heading_container">
                <h2>Our <span>Services</span></h2>
                <p>There are many variations of AI flavours that you can use to enhance your presentation.</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    <div className="img-box">
                      <img src="/images/char1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Complete Rework</h5>
                      <p>Bigger changes if you have more time until your presentation</p>
                      <Link href="/character-1" target="_blank" rel="noopener noreferrer">
                        <button>Try Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <div className="img-box">
                      <img src="/images/char1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Polish Up</h5>
                      <p>Minimal edits, meant for last minute presentations</p>
                      <Link href="/character-2" target="_blank" rel="noopener noreferrer">
                        <button>Try Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <div className="img-box">
                      <img src="/images/char3.webp" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Shakesphere</h5>
                      <p>Get help from Shakesphere himself to improve your presentation</p>
                      <Link href="/character-3" target="_blank" rel="noopener noreferrer">
                        <button>Try Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        {/* end service section */}

        {/* info section */}
        <section className="info_section layout_padding2">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="justify-content-center align-items-center">
              <h4>Powered by Hume AI</h4>
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
